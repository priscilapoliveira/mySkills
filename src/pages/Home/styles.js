import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.os === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  textButton: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1e25',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;