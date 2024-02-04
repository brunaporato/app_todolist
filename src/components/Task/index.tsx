import { TouchableOpacity, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

interface TaskProps {
  taskText: string
  isChecked: boolean
  onCheck: () => void
  onDelete: () => void
}

export function Task({ taskText, onCheck, isChecked, onDelete }: TaskProps) {
  const taskTextStyle = isChecked ? styles.taskTextChecked : styles.taskText

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCheck} style={styles.checkboxContainer}>
        {isChecked ? (
          <Icon name="check-circle" size={20} color="#5E60CE" />
        ) : (
          <Icon name="radio-button-unchecked" size={20} color="#4EA8DE" />
        )}
      </TouchableOpacity>
      <Text style={taskTextStyle}>{taskText}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Icon name="delete-outline" size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
