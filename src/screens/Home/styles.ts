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
    fontFamily: 'Inter_400Regular',
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
  },
  info:{ 
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -50,
  },
  created:{
    flexDirection: 'row'
  },
  textCreated:{
    color: '#4EA8DE',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    fontWeight: 'bold',
    marginRight: 12
  },
  done: {
    flexDirection: 'row',
  },
  textDone: {
    color: '#8284FA',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    fontWeight: 'bold',
    marginRight: 12
  },
  counter: {
    height: 25,
    width: 35,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  textCounter: {
    color: '#D9D9D9',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    fontWeight: 'bold'
  },
  list :{
    top:-50, 
    paddingHorizontal: 24
  }
});