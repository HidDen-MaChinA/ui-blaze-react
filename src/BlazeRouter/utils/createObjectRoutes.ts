import type { TBlazeRouteType } from "../../@types/TBlazeRoutesConfiguration";

export default function createObjectRoutes<T>(arg: TBlazeRouteType<T>[]) : TBlazeRouteType<T>[]{
    return arg
}