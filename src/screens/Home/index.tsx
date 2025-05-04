import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from './styles';

import Logo from '../../assets/logo.svg'
import { Empty } from '../../components/Empty/Empty';
import { Task } from '../../components/Task';

export function Home() {
  const task = ['Integer urna interdum massa libero auctor neque turpis turpis semper.','Fabiano Souza.', 'Leriane Tamara Nishihara']
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Logo width={200} height={200}/>
      </View>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
        />
        <TouchableOpacity style={styles.button}>
        <AntDesign name="pluscircleo" size={18} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.created}>
          <Text style={styles.textCreated}>Criadas</Text>
          <View style={styles.counter}>
            <Text style={styles.textCounter}>{task.length}</Text>
          </View>
        </View>
        <View style={styles.done}>
          <Text style={styles.textDone}>Concluídas</Text>
          <View style={styles.counter}>
            <Text style={styles.textCounter}>0</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={task}
        style={styles.list}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Task key={item} title={item}/>
        )}
        ListEmptyComponent={
          <Empty/>
        }
      />
    </View>
  );
}