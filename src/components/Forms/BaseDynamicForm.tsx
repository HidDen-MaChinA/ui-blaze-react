import { useForm, type UseFormRegister } from "react-hook-form"

export enum DynamiqueInputType {
    text, number
}

export type DynamiqueInputBase = {
    label : string
    type : DynamiqueInputType
}

type IUseForm = {
   name: string 
   username: string
}

export type BaseDynamicFormFeatureLayerPropsType = {
    formStructure: DynamiqueInputBase[]

}

function formatFormStructureToUseFormInterface (formStructure: DynamiqueInputBase[]){
    let toReturn : {[args:string]: any} = {}
    for (let i= 0; i < formStructure.length; i++) {
       switch(formStructure[i].type){
        case DynamiqueInputType.text:
           toReturn[formStructure[i].label] = "";
           continue;
        case DynamiqueInputType.number:
           toReturn[formStructure[i].label] = 0;
           continue;
       }
    }
    return toReturn;
}

export function BaseDynamicFormFeatureLayer(props: BaseDynamicFormFeatureLayerPropsType){
    const {formStructure} = props;
    const {register, handleSubmit} = useForm(formatFormStructureToUseFormInterface(formStructure));
    const functionRefSwitch = [displayTextInput, displayNumberInput]
   return (
    <form onSubmit={handleSubmit((data)=>{
        console.log(data)
    })}>
        {
            formStructure && formStructure.map((inputBase, index)=>{
                return functionRefSwitch[inputBase.type](register, inputBase.label,`dynamique-form-input-type-${inputBase.type}-index-${index}` )
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


