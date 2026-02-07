import type { UseFormRegister } from "react-hook-form";
import type { CustomInput } from "./CustomInput";
import type { ICustomInputs } from "./ICustomInputs";

export class CustomInputs implements ICustomInputs{
    _date?: CustomInput<string | null> = displayDateInput;
    _file?: CustomInput<File | null> = displayFileInput;
    _number?: CustomInput<number> = displayNumberInput;
    _password?: CustomInput<string> = displayPasswordInput;
    _text?: CustomInput<string> = displayTextInput;
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