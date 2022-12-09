import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 173,
    backgroundColor: '#0D0D0D',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
    marginBottom: 70,
  },
  logoText1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4EA8DE'
  },
  logoText2: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5E60CE'
  },
  content: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -52,
    marginBottom: 42, 
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    flexDirection: 'row',
  },
  createdTasksLabel: {
    fontWeight: 'bold',
    color: '#1E6F9F',
  },
  finishedTasksLabel: {
    fontWeight: 'bold',
    color: '#5E60CE',
  },
  taskCounter: {
    width: 25,
    fontWeight: 'bold',
    color: '#D9D9D9',
    textAlign: 'center',
    backgroundColor: '#262626',
    borderRadius: 50,
    marginLeft: 8,
  },
})