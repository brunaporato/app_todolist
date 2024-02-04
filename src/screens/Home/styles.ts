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

  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginTop: 13,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },

  textHeaderList: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  created: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
  },

  done: {
    color: '#8284fa',
    fontSize: 14,
    fontWeight: 'bold',
  },

  numberContainer: {
    backgroundColor: '#333',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
  },

  numberHeader: {
    fontSize: 12,
    color: '#D9D9D9',
    fontWeight: 'bold',
  },

  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 64,
    gap: 4,
  },

  emptyListText: {
    color: '#808080',
    fontSize: 14,
  },

  emptyListTextBold: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',
  },
})
