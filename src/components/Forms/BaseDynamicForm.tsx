import React from "react";
import { useForm, type FieldValues, type SubmitErrorHandler, type SubmitHandler, type UseFormRegister } from "react-hook-form"

export enum DynamiqueInputType {
    _text, _number, _password, _file, _date
}

export type DynamiqueInputBase = {
    label : string
    type : DynamiqueInputType
    required?: boolean
}

export type CustomInput<T> = (register: UseFormRegister<{[args:string]: T}>, label: string, key: string, required?: boolean)=>React.ReactNode;

export interface ICustomInputs {
    _text?: CustomInput<string>    
    _number?: CustomInput<number>
    _password?: CustomInput<string>
    _file?: CustomInput<File|null>
    _date?: CustomInput<string|null>
}

export type BaseDynamicFormFeatureLayerPropsType = {
    formStructure: DynamiqueInputBase[]
    customInputs?: ICustomInputs
    onSubmit?: SubmitHandler<FieldValues>
    onInvalid?: SubmitErrorHandler<FieldValues> 
}

function formatFormStructureToUseFormInterface (formStructure: DynamiqueInputBase[]){
    let toReturn : {[args:string]: any} = {}
    for (let i= 0; i < formStructure.length; i++) {
       switch(formStructure[i].type){
        case DynamiqueInputType._text:
           toReturn[formStructure[i].label] = "";
           continue;
        case DynamiqueInputType._password:
           toReturn[formStructure[i].label] = "";
           continue;
        case DynamiqueInputType._number:
           toReturn[formStructure[i].label] = 0;
           continue;
        case DynamiqueInputType._file:
           toReturn[formStructure[i].label] = null;
           continue;
        case DynamiqueInputType._date:
           toReturn[formStructure[i].label] = null;
           continue;
       }
    }
    return toReturn;
}

export function BaseDynamicFormFeatureLayer(props: BaseDynamicFormFeatureLayerPropsType){
    const {formStructure, customInputs, onSubmit, onInvalid} = props;
    console.log(formatFormStructureToUseFormInterface(formStructure));
    const {register, handleSubmit} = useForm(formatFormStructureToUseFormInterface(formStructure));
    const functionRefObject : ICustomInputs = customInputs || {
        _number: displayNumberInput,
        _password: displayPasswordInput,
        _text: displayTextInput,
        _file: displayFileInput,
        _date: displayDateInput
    }

    /**
     * 0: text 
     * 1: number
     * 2: password
     * 3: file
     * ...
     * n: N function that return a react node
     * */ 
    const functionRefArray = [
      functionRefObject._text,
      functionRefObject._number,
      functionRefObject._password,
      functionRefObject._file,
      functionRefObject._date,
    ];
    const defaultSubmitHandler = ()=>{
        alert("no hanlder implemented")
    }
   return (
     <form
       onSubmit={handleSubmit(onSubmit || defaultSubmitHandler , onInvalid)}
     >
       {formStructure &&
         formStructure.map((inputBase, index) => {
           if (functionRefArray[inputBase.type]) {
             return functionRefArray[inputBase.type]!(
               register,
               inputBase.label,
               `dynamique-form-input-type-${inputBase.type}-index-${index}`
             );
           }
           return <div>no custom component of type "{inputBase.type}" defined</div>;
         })}
       <button>submit</button>
     </form>
   ); 
}

function displayTextInput(register: UseFormRegister<{[args:string]: string}>, label: string, key: string, required?: boolean){
    return (
        <input type="text" {...register(label, {required: required})} key={key}/>
    )
}

function displayNumberInput(register: UseFormRegister<{[args:string]: number}>, label: string, key: string, required?: boolean){
    return (
        <input type="number" {...register(label, {required: required})} key={key}/>
    )
}

function displayPasswordInput(register: UseFormRegister<{[args:string]: string}>, label: string, key: string, required?: boolean){
    return (
        <input type="password" {...register(label, {required: required})} key={key}/>
    )
}

function displayFileInput(register: UseFormRegister<{[args:string]: File|null}>, label: string, key: string, required?: boolean){
    return (
        <input type="file" {...register(label, {required: required})} key={key}/>
    )
}

function displayDateInput(register: UseFormRegister<{[args:string]: string|null}>, label: string, key: string, required?: boolean){
    return (
        <input type="date" {...register(label, {required: required})} key={key}/>
    )
}

