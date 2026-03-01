import type React from "react";
import { useBlazeFeedBackStore } from "../stores/BlazeStores/blazeFeedBackStore";
import { useEffect, useLayoutEffect } from "react";

export type BlazeFeedBackPropsType = {
    name: string
    children: React.ReactNode
}

export function BlazeFeedBack (props: BlazeFeedBackPropsType){
    const {addFeedBackMap, feedBacksMessageMap} = useBlazeFeedBackStore(_=>_)
    useLayoutEffect(()=>{
        addFeedBackMap(props.name)
    }, [])
    useEffect(()=>{
        console.log(feedBacksMessageMap.get(props.name))
    }, [feedBacksMessageMap])
    return props.children;
}