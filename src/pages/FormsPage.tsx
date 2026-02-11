import { useEffect, useState } from "react";
import { BlazeBaseDynamicForm } from "../BlazeForm/BlazeBaseDynamicForm";
import { DynamiqueInputType } from "../BlazeForm/DynamiqueInputBase";
import { AppButton } from "../components/Button";
import { useAuthStore } from "../stores/BlazeStores/authStore";
import { BlazeBaseAuthentificationProvider } from "../BlazeAuthentification/BlazeAuthentificationProvider";
import { UserApiCallsHandler } from "../BlazeApiCalls/ApiCallsHandlers/UserApiCallsHandler";
import { CustomerApiCallsHandler } from "../BlazeApiCalls/ApiCallsHandlers/CustomerApiCallsHandler";
import H2 from "../components/Typography/H2";
import type { CustomerSchema } from "../BlazeApiCalls/Schemas/CustomerSchema";
import { Text } from "../components/Typography/Text";

export default function FormsPage(){
    const user = useAuthStore(_=>_.userInformations);
    const userApiCallsHandler = new UserApiCallsHandler("/api/users");
    const customerApiCalls = new CustomerApiCallsHandler("/api/customers");
    const [customers, setCustomers] = useState<CustomerSchema[]>([]);
    useEffect(()=>{
      customerApiCalls.get<CustomerSchema[]>("/getall").then((res)=>setCustomers(res))
    }, [])
    return (
      <div>
        <div className="p-3">
          <BlazeBaseDynamicForm
            customButton={{
              Component: AppButton
            }}
            onSubmit={(data)=>{
              userApiCallsHandler.post({name: data.name, password: data.password, username: data.password}, "/create").then(console.log);
            }}
            formStructure={[
              { label: "username", type: DynamiqueInputType._text },
              { label: "password", type: DynamiqueInputType._password},
              { label:"role", required: true,type: DynamiqueInputType._select, values:["ADMIN", "USER"]},
          ]}
          />
          <H2>Create Customer</H2>
          <BlazeBaseDynamicForm
            customButton={{
              Component: AppButton,
              text: "Create Customer"
            }}
            onSubmit={(data)=>{
              customerApiCalls.post({name:data.name}, "/create").then(console.log);
            }}
            formStructure={[
              { label: "name", type: DynamiqueInputType._text },
          ]}
          />
          <H2>Customer List</H2>
          {
            customers.map((customer)=>(
              <div>
                <Text>{customer.name}</Text>
                <Text>{customer.status}</Text>
              </div>
            ))
          }
        </div>
      </div>
    );
}