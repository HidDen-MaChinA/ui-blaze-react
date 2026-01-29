import React from "react";
import { useForm, type UseFormRegister } from "react-hook-form"

export enum DynamiqueInputType {
    _text, _number, _password
}

export type DynamiqueInputBase = {
    label : string
    type : DynamiqueInputType
}

export type CustomInput<T> = (register: UseFormRegister<{[args:string]: T}>, label: string, key: string)=>React.ReactNode;

export interface ICustomInputs {
    _text: CustomInput<string>    
    _number: CustomInput<number>
    _password: CustomInput<string>
}

export type BaseDynamicFormFeatureLayerPropsType = {
    formStructure: DynamiqueInputBase[]
    customInputs?: ICustomInputs
}

function formatFormStructureToUseFormInterface (formStructure: DynamiqueInputBase[]){
    let toReturn : {[args:string]: any} = {}
    for (let i= 0; i < formStructure.length; i++) {
       switch(formStructure[i].type){
        case DynamiqueInputType._text || DynamiqueInputType._password:
           toReturn[formStructure[i].label] = "";
           continue;
        case DynamiqueInputType._number:
           toReturn[formStructure[i].label] = 0;
           continue;
       }
    }
    return toReturn;
}

export function BaseDynamicFormFeatureLayer(props: BaseDynamicFormFeatureLayerPropsType){
    const {formStructure, customInputs} = props;
    const {register, handleSubmit} = useForm(formatFormStructureToUseFormInterface(formStructure));
    const functionRefObject : ICustomInputs = customInputs || {
        _number: displayNumberInput,
        _password: displayPasswordInput,
        _text: displayTextInput
    }
    const functionRefArray = [functionRefObject._text, functionRefObject._number, functionRefObject._password];
   return (
    <form onSubmit={handleSubmit((data)=>{
        console.log(data)
    })}>
        {
            formStructure && formStructure.map((inputBase, index)=>{
               return functionRefArray[inputBase.type](register, inputBase.label,`dynamique-form-input-type-${inputBase.type}-index-${index}`);
            })
        }
       <button>submit</button>
    </form>
   ) 
}

function displayTextInput(register: UseFormRegister<{[args:string]: string}>, label: string, key: string){
    return (
        <input type="text" {...register(label)} key={key}/>
    )
}

function displayNumberInput(register: UseFormRegister<{[args:string]: number}>, label: string, key: string){
    return (
        <input type="number" {...register(label)} key={key}/>
    )
}

function displayPasswordInput(register: UseFormRegister<{[args:string]: string}>, label: string, key: string){
    return (
        <input type="text" {...register(label)} key={key}/>
    )
}

