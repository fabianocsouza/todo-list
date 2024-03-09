import { Container, Icon, TextEmpty, TextEmpty2 } from "./styles";

import Clipboard  from "../../assets/Clipboard.png";
import { SeparatorItem } from "@components/SeparatorItem";

export const ListEmpty = () => {
  return (
    <Container>
        <SeparatorItem />
        <Icon source={Clipboard} />
        <TextEmpty>Você ainda não tem tarefas cadastradas</TextEmpty>
        <TextEmpty2>Crie tarefas e organize seus itens a fazer</TextEmpty2>
    </Container>
  );
}