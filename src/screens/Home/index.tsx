import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from './styles';

import Logo from '../../assets/logo.svg'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Logo width={300} height={300}/>
      </View>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
        />
        <TouchableOpacity style={styles.button}>
        <AntDesign name="pluscircleo" size={24} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
    </View>
  );
}