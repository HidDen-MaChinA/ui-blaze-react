import { AxiosBlazeApi } from "../BlazeApiBase";
import type { UserSchema } from "../Schemas/UserSchema";

export class UserApiCallsHandler extends AxiosBlazeApi<UserSchema> {}