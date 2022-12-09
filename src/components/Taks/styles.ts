import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    border: '1 solid #333333',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#F2F2F2',
    marginLeft: 16
  },
  button: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  }
})