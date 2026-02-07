import { BlazeBaseButton } from "../BlazeButtons/BlazeButtons/BlazeBaseButton";
import { BlazeBaseDynamicForm } from "../BlazeForm/BlazeBaseDynamicForm";
import { DynamiqueInputType } from "../BlazeForm/DynamiqueInputBase";
import { AppButton } from "../components/Button";

export default function FormsPage(){
    return (
      <div>
        <div className="p-3">
          <BlazeBaseDynamicForm
            customButton={{
              Component: AppButton
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
      </div>
    );
}