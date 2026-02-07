export enum DynamiqueInputType {
    _text, _number, _password, _file, _date
}

export type DynamiqueInputBase = {
    label : string
    type : DynamiqueInputType
    required?: boolean
}