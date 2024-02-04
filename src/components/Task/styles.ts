import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,

    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',

    marginBottom: 8,
  },

  checkboxContainer: {
    padding: 4,
  },

  taskText: {
    flex: 1,
    color: '#F2F2F2',
  },

  taskTextChecked: {
    color: '#808080',
    textDecorationLine: 'line-through',
    flex: 1,
  },

  deleteButton: {
    padding: 10,
  },
})
