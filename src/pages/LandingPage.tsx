import type { ChangeEvent } from "react";
import H1 from "../components/Typography/H1";
import H2 from "../components/Typography/H2";
import H3 from "../components/Typography/H3";
import H4 from "../components/Typography/H4";
import H5 from "../components/Typography/H5";
import H6 from "../components/Typography/H6";
import { Text } from "../components/Typography/Text";
import { useTranslation } from "react-i18next";

export function LandingPage() {
    const {t, i18n} = useTranslation("landing_page");
    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{
        i18n.changeLanguage(e.target.value);
    }

   return (
    <div>
       <H1>heading 1</H1> 
        <H2>heading 2</H2>
        <H3>heading 3</H3>
        <H4>heading 4</H4>
        <H5>heading 5</H5>
        <H6>heading 6</H6>
        <Text>simple text</Text>
        <Text>{t("greeting")}</Text>
        <div className="flex flex-col [&>div]:flex [&>div]:gap-3">
            <div>
                <input type="radio" onChange={onChange} name="language" value={"en"} />
                <label htmlFor="">English</label>
            </div>
            <div>
                <input type="radio" onChange={onChange} name="language" value={"mg"}/>
                <label htmlFor="">Malagasy</label>
            </div>
            <div>
                <input type="radio" onChange={onChange} name="language" value={"fr"}/>
                <label htmlFor="">Français</label>
            </div>
        </div>
    </div>
   ) 
}