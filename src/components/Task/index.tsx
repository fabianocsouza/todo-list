import { ButtonDelete } from "@components/ButtonDelete";
import { Container } from "./styles";
import { Checked } from "@components/Checked";
import { useState } from "react";
import { useTask } from "@hooks/index";
type Props = {
  text: string;
  onRemove: () => void;
}
export const Task = ({ text, onRemove } :Props) => {
  const { addTaskDone, removeTaskDone} = useTask();
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);

    if(!isChecked) {
      addTaskDone();
    }else{
      removeTaskDone();
    }
   
  };
  
  return(
    <Container done={isChecked} >
      <Checked 
        text={text}
        handlePress={() => handlePress()}
        isChecked={isChecked}
      />
      <ButtonDelete active={isChecked} onRemove={onRemove} />
    </Container>
  );
}