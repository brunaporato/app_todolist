import { Image, View, TextInput, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
import Logo from '../../../assets/Logo.png'

export function Home() {
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
      </View>
    </View>
  )
}
