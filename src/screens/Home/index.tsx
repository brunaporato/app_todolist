import { Image, View } from 'react-native'
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
    </View>
  )
}
