import { BaseDynamicFormFeatureLayer, DynamiqueInputType } from "../components/Forms/BaseDynamicForm";

export default function FormsPage(){
    return (
      <div>
        <BaseDynamicFormFeatureLayer
          formStructure={[
            { label: "name", type: DynamiqueInputType._text },
            { label: "username", type: DynamiqueInputType._text },
            { label: "age", type: DynamiqueInputType._number },
            { label: "image", type: DynamiqueInputType._file }
        ]}
        />
      </div>
    );
}