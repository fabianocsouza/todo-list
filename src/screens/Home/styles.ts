import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },
  header: {
    backgroundColor: '#0D0D0D',
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form:{
    width: '100%',
    flexDirection: 'row',
    padding: 24,
    top: -50
  },
  input:{
    flex: 1,
    height: 54,
    borderRadius: 8,
    backgroundColor: '#262626',
    marginRight: 12,
    padding: 16,
    fontSize: 16,
    borderColor: '#0D0D0D',
    borderWidth: 1
  },
  button:{
    height: 54,
    width: 54,
    borderRadius: 8,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  }
});