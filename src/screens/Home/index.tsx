import {
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'
import Logo from '../../../assets/Logo.png'
import { Task } from '../../components/Task'
import { useState } from 'react'
import { Icon } from 'react-native-elements'

interface Task {
  task: string
  isChecked: boolean
}

export function Home() {
  const [taskList, setTaskList] = useState<Task[]>([])
  const [newTask, setNewTask] = useState<Task>({ task: '', isChecked: false })

  function toggleCheckbox(task: Task) {
    setTaskList((prevTasks) => {
      const index = prevTasks.findIndex((item) => item.task === task.task)
      if (index !== -1) {
        const updatedTasks = [...prevTasks]
        updatedTasks[index] = { ...task, isChecked: !task.isChecked }
        return updatedTasks
      }
      return prevTasks
    })
  }

  function handleAddNewTask() {
    if (taskList.some((item) => item.task === newTask.task)) {
      return Alert.alert('Task duplicated', 'You already added that task.')
    }

    if (newTask.task === '') {
      return Alert.alert(
        'Empty task',
        'You should write some task before adding it',
      )
    }

    setTaskList((prevState) => [...prevState, newTask])
    setNewTask({ task: '', isChecked: false })
  }

  function handleRemoveTask(taskToDelete: Task) {
    Alert.alert('Delete task', 'Do you want to delete this task?', [
      {
        text: 'Yes',
        onPress: () => {
          setTaskList((prevState) =>
            prevState.filter((task) => task !== taskToDelete),
          )
        },
        style: 'destructive',
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={Logo}
          alt="Icon of a purple rocket"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.addTask}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task"
            placeholderTextColor="#808080"
            onChangeText={(text) =>
              setNewTask({ task: text, isChecked: false })
            }
            value={newTask.task}
            autoCorrect={false}
            autoComplete="off"
            onSubmitEditing={handleAddNewTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddNewTask}>
            <Icon name="add-circle-outline" size={18} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerList}>
          <View style={styles.textHeaderList}>
            <Text style={styles.created}>Criadas</Text>
            <View style={styles.numberContainer}>
              <Text style={styles.numberHeader}>{taskList.length}</Text>
            </View>
          </View>
          <View style={styles.textHeaderList}>
            <Text style={styles.done}>Concluidas</Text>
            <View style={styles.numberContainer}>
              <Text style={styles.numberHeader}>
                {taskList.filter((task) => task.isChecked).length}
              </Text>
            </View>
          </View>
        </View>
        <FlatList
          data={taskList}
          keyExtractor={(task) => task.task}
          renderItem={(task) => (
            <Task
              taskText={task.item.task}
              onCheck={() => toggleCheckbox(task.item)}
              isChecked={task.item.isChecked}
              onDelete={() => handleRemoveTask(task.item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Icon
                name="content-paste"
                size={56}
                color="#333"
                style={styles.emptyListIcon}
              />

              <Text style={styles.emptyListTextBold}>
                Your task list is empty
              </Text>
              <Text style={styles.emptyListText}>
                Add tasks and organize your day
              </Text>
            </View>
          )}
          style={styles.list}
        />
      </View>
    </View>
  )
}
