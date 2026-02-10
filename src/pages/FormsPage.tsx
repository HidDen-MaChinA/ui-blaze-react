import { useEffect } from "react";
import { BlazeBaseDynamicForm } from "../BlazeForm/BlazeBaseDynamicForm";
import { DynamiqueInputType } from "../BlazeForm/DynamiqueInputBase";
import { AppButton } from "../components/Button";
import { useAuthStore } from "../stores/BlazeStores/authStore";
import { BlazeBaseAuthentificationProvider } from "../BlazeAuthentification/BlazeAuthentificationProvider";
import { UserApiCallsHandler } from "../BlazeApiCalls/ApiCallsHandlers/UserApiCallsHandler";

export default function FormsPage(){
    const user = useAuthStore(_=>_.userInformations);
    const userApiCallsHandler = new UserApiCallsHandler();
    return (
      <div>
        <div className="p-3">
          <BlazeBaseDynamicForm
            customButton={{
              Component: AppButton
            }}
            onSubmit={(data)=>{
              userApiCallsHandler.post({name: data.name, password: data.password, username: data.password}, "/api/users/create").then(console.log);
            }}
            formStructure={[
              { label: "username", type: DynamiqueInputType._text },
              { label: "password", type: DynamiqueInputType._password},
              { label:"role", required: true,type: DynamiqueInputType._select, values:["ADMIN", "USER"]},
          ]}
          />
        </div>
      </div>
    );
}