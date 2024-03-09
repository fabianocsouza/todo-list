import { useTheme } from "styled-components/native";
import { useState } from "react";
import { Alert, FlatList } from "react-native";

import { 
  ButtonCreate, Container, Counter, Created, Done, Form, Header,  Info,  Input, 
  Logo, Plug,  Value } from "./styles";

import { ListEmpty } from "@components/ListEmpty";
import { Task } from "@components/Task";
import { useTask } from "@hooks/index";

import logoImg from "@assets/logo.png"
import plugImg from "@assets/plus.png"

export const Home = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [ativo, setAtivo] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');
  const { taskCompleted } = useTask();
  const theme = useTheme();

  const handlePressIn = () => {
    setIsPressed(true);
  };
  const handleAtivo = () => {
    setAtivo(true);
  };

  const handleTaskAdd = () => {

    if(tasks.includes(task)) {
      return Alert.alert("Tarefa existe:", "Já existe uma tarefa na lista com esse contexto.");
    } 
    setTasks(prev => [...prev, task]);
    setTask('');
}

const handleTaskDelete = (task: string) => {
  setTasks(prevState => prevState.filter(tasks => tasks !== task))
}

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
      </Header>
      <Form>
        <Input 
          onPressIn={handleAtivo}
          ativo={ativo}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.COLORS.GRAY_300}
          onChangeText={ setTask }
          value={ task }
          maxLength={75}
        />
        <ButtonCreate
        onPressIn={handlePressIn}
        onPress={handleTaskAdd }
        >
          <Plug source={plugImg} />
        </ButtonCreate>
      </Form>

      <Info>
        <Created>Criadas</Created>
        <Counter>
          <Value>{tasks.length}</Value>
        </Counter>
        
        <Done>Concluídas</Done>
        <Counter>
          <Value>{taskCompleted}</Value>
        </Counter>
      </Info>
      <FlatList
        data={tasks}
        keyExtractor={(item => item)}
        renderItem={({item}) => <Task  onRemove={ ()=>handleTaskDelete(item)} text={`${item}`} />}
        ListEmptyComponent={() => <ListEmpty/>}
      />
    </Container>
  );
}