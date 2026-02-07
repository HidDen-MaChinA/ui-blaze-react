import { BlazeBaseDynamicForm } from "../BlazeForm/BlazeBaseDynamicForm";
import { DynamiqueInputType } from "../BlazeForm/DynamiqueInputBase";
import { BlazeButton } from "../components/Buttons/BlazeButtons/BlazeButton";

export default function FormsPage(){
    return (
      <div>
        <BlazeBaseDynamicForm
          customButton={{
            Component: BlazeButton
          }}
          onSubmit={console.log}
          formStructure={[
            { label: "image", type: DynamiqueInputType._file },
            { label: "name", type: DynamiqueInputType._text },
            { label: "age", type: DynamiqueInputType._number },
            { label: "username", type: DynamiqueInputType._text },
            { label: "password", type: DynamiqueInputType._password},
            { label: "birthday", type: DynamiqueInputType._date},
        ]}
        />
      </div>
    );
}