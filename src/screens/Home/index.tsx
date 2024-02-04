import {
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native'
import { styles } from './styles'
import Logo from '../../../assets/Logo.png'

export function Home() {
  const todoList = ['etc', 'etal']
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
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerList}>
          <View style={styles.textHeaderList}>
            <Text style={styles.created}>Criadas</Text>
            <View style={styles.numberContainer}>
              <Text style={styles.numberHeader}>0</Text>
            </View>
          </View>
          <View style={styles.textHeaderList}>
            <Text style={styles.done}>Concluidas</Text>
            <View style={styles.numberContainer}>
              <Text style={styles.numberHeader}>0</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={[]}
          keyExtractor={(item) => item}
          renderItem={(item) => <Text>{item.item}</Text>}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Text style={styles.emptyListTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
