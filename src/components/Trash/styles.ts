import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginLeft: Platform.OS === 'ios' ? 10 : -35
  }
});