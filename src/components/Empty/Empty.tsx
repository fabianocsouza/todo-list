import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

import Clipboard from '../../assets/clipboard.svg'

export function Empty() {
  return (
    <View style={styles.container}>
      <View style={styles.separator}></View>
      <Clipboard width={80} height={80} />
      <Text style={styles.emptyI}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.emptyII}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}