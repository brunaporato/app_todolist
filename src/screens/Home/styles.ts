import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    height: '100%',
  },

  header: {
    backgroundColor: '#0D0D0D',
    padding: 70,
    alignItems: 'center',
    paddingTop: 90,
  },

  logo: {
    width: 110,
    height: 32,
  },

  content: {
    paddingHorizontal: 24,
  },

  addTask: {
    flexDirection: 'row',
    gap: 4,
    marginTop: -28,
  },

  input: {
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 16,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    flex: 1,
  },

  addButton: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    width: 48,
    height: 48,

    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#F2F2F2',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
