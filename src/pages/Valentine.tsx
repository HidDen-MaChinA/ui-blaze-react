import {
  useEffect,
  useState,
  type CSSProperties,
  type Dispatch,
  type SetStateAction,
} from "react";
import { BlazeBaseButton } from "../BlazeButtons/BlazeButtons/BlazeBaseButton";
import H2 from "../components/Typography/H2";
import { useWindowSize } from "@react-hook/window-size";
import type { BlazeBaseButtonType } from "../BlazeButtons/BlazeBaseButtonType";

const rotateOrder = (
  setOrder: Dispatch<SetStateAction<"pinch" | "kiss" | "dance" | null>>
) => {
  setOrder((order) => {
    switch (order) {
      case "dance":
        return "pinch";
      case "pinch":
        return "kiss";
      case "kiss":
        return "dance";
    }
    return null;
  });
};

export function Valentine() {
  const [buttonStyle, setButtonStyle] = useState<CSSProperties | undefined>();
  const [width, height] = useWindowSize();
  const [status, setStatus] = useState(false);
  const [order, setOrder] = useState<"dance" | "pinch" | "kiss" | null>(null);
  const [timeoutId, setTimeoutId] = useState<number>();
  const refreshInterval = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const timeout = setTimeout(() => {
      rotateOrder(setOrder);
      refreshInterval();
    }, 3000);
    setTimeoutId(timeout);
  };
  const eventHandler = () => {
    setButtonStyle({
      position: "absolute",
      left: randomNumber(90, width - 90),
      top: randomNumber(90, height - 90),
    });
  };
  const onAccept = () => {
    setStatus(true);
    setOrder("dance");
    refreshInterval();
  };
  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="h-[100vh] bg-pink-100 w-full flex justify-center items-center">
      <div className="flex p-3 flex-col items-center gap-3">
        <div className="shadow-lg bg-white flex-col p-4 items-center justify-center  rounded-xl border border-pink-300">
          <H2 className="text-pink-700 text-center">
            {status ? "Yeahhhhhhh 🥰🥰 " : "Will you be my valentine ❤️ ?"}
          </H2>
          <div className="flex justify-center">
            <div className="w-[250px] h-[250px]">
              {status ? (
                <RotatingImage order={order} />
              ) : (
                <img src="/images/dudu.gif" alt="dudu and bubu.gif" />
              )}
            </div>
          </div>
        </div>
        {status || (
          <div className="flex gap-3">
            <CustomeValentineButton onClick={onAccept} className="">
              Yes
            </CustomeValentineButton>

            <CustomeValentineButton
              variant
              style={buttonStyle}
              onMouseOver={eventHandler}
              onClick={eventHandler}
              className=" top-0 left-0"
            >
              No
            </CustomeValentineButton>
          </div>
        )}
      </div>
    </div>
  );
}

const CustomeValentineButton: BlazeBaseButtonType = (props) => {
  return (
    <button
      {...{
        ...props,
        className: `${
          props.variant
            ? "bg-white text-pink-400 border border-pink-400"
            : "bg-pink-400 text-white"
        } duration-[1000ms] shadow-lg py-3 px-5 text-lg rounded-xl cursor-pointer`,
      }}
    ></button>
  );
};

const RotatingImage = (props: { order: "dance" | "pinch" | "kiss" | null }) => {
  const { order } = props;
  return (
    <div>
      <img
        hidden={!(order === "dance")}
        className="w-full h-full"
        src="/images/dudu_dancing.gif"
        alt=""
      />
      <img
        hidden={!(order === "pinch")}
        className="w-full h-full"
        src="/images/bubu_pinched.gif"
        alt=""
      />
      <img
        hidden={!(order === "kiss")}
        className="w-full h-full"
        src="/images/dudu_kiss_bubu.gif"
        alt=""
      />
    </div>
  );
};
