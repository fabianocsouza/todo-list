import { useState } from "react";
import { Icon, Touchable } from "./styles";

import deleteImg from "@assets/delete.png";
import deleteActiveImg from "@assets/delete-active.png";
import { useTask } from "@hooks/index";

type Props = {
  active: boolean;
  onRemove: () => void;
}


export const ButtonDelete = ({ onRemove, active }: Props) => {
  const [isPressed, setIsPressed] = useState(false);
  const { removeTaskDone} =  useTask();
  
  const handlePressIn = () => {
    setIsPressed(true);
  };
  const handlePressOut = () => {
    setIsPressed(false);
    if(active) {
      removeTaskDone();
    }
  };

  return(
      <Touchable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onRemove}
    >
      <Icon source={isPressed ? deleteActiveImg : deleteImg}/>
    </Touchable>
  );
};