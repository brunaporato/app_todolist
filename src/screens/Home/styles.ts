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
    flex: 1,
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

    color: '#f2f2f2',
    fontSize: 16,
  },

  addButton: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },

  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginTop: 13,
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
    borderTopColor: '#333',
    borderTopWidth: 1,
  },

  emptyListIcon: {
    marginBottom: 16,
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

  list: {
    marginBottom: 24,
  },
})
