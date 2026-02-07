import { BlazeBaseDynamicForm } from "../BlazeForm/BlazeBaseDynamicForm";
import { DynamiqueInputType } from "../BlazeForm/DynamiqueInputBase";

export default function FormsPage(){
    return (
      <div>
        <BlazeBaseDynamicForm
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