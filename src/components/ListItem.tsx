import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export interface ListItemProps {
  name: string
  image: string
  reputation: string
}

const ListItem: React.FC<ListItemProps> = ({ name, image, reputation }) => {
  const [follow, setFollow] = useState(false)
  const [block, setBlock] = useState(false)

  const onFollow = () => {
    setFollow(true)
  }
  const onBlock = () => {
    setBlock(true)
    setFollow(false)
  }
  const onUnblock = () => {
    setBlock(false)
  }
  return (
    <>
      <View
        style={[
          styles.container,
          block ? { backgroundColor: '#a6a6a6' } : { backgroundColor: '#fff' },
        ]}
        testID='list item'
      >
        {follow && <Text style={styles.text}>Following!</Text>}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onFollow} style={styles.followButton}>
            <Text>Follow</Text>
          </TouchableOpacity>
          {block ? (
            <TouchableOpacity onPress={onUnblock} style={styles.blockButton}>
              <Text>Unblock</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onBlock} style={styles.blockButton}>
              <Text>Block</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.itemContainer}>
          <Image style={styles.tinyLogo} source={{ uri: image }} />
          <View style={styles.textContainer}>
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.text}>Reputation: {reputation}</Text>
          </View>
        </View>
      </View>
    </>
  )
}

export default ListItem
