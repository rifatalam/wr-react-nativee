import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import axios from 'axios'
import ListItem from './src/components/ListItem'

export default function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const getUsers = () => {
      axios
        .get(
          'http://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow'
        )
        .then((resp) => {
          resp.data.items, setData(resp.data.items), setError(false)
        })
        .catch((error) => {
          console.log(error)
          setError(true)
        })
    }
    getUsers()
    console.log({ data })
  }, [])

  return (
    <>
      <StatusBar style='auto' />
      {error === true && <Text>This service is unavailable right now</Text>}
      <Text
        style={{
          marginTop: 60,
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        Stackoverflow top 20 users
      </Text>
      <View style={styles.container}>
        <ScrollView>
          {data.map((item, index) => {
            return (
              <ListItem
                key={index}
                name={item.display_name}
                image={item.profile_image}
                reputation={item.reputation}
              />
            )
          })}
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: 100,
  },
})
