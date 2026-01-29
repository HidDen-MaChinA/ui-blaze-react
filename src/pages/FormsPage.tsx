import { BaseDynamicFormFeatureLayer, DynamiqueInputType } from "../components/Forms/BaseDynamicForm";

export default function FormsPage(){
    return (
        <div>
            <BaseDynamicFormFeatureLayer formStructure={[{label: "name", type: DynamiqueInputType.text}]} />
        </div>
    )
}