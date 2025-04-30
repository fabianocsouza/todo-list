import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from './styles';

import Logo from '../../assets/logo.svg'
import Clipboard from '../../assets/clipboard.svg'

export function Home() {
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
            <Text style={styles.textCounter}>0</Text>
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
        data={[]}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Text key={item}>{item}</Text>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <View style={styles.separator}></View>
            <Clipboard width={80} height={80} />
            <Text style={styles.emptyI}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptyII}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        }
      />
    </View>
  );
}