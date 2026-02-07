import type { CustomInput } from "./CustomInput"

export interface ICustomInputs {
    _text?: CustomInput<string>    
    _number?: CustomInput<number>
    _password?: CustomInput<string>
    _file?: CustomInput<File|null>
    _date?: CustomInput<string|null>
}
