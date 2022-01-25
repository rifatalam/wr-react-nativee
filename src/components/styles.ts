import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: StyleSheet.hairlineWidth
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
      },
      textContainer: {
          flex: 1,
          justifyContent: 'center'
      },
    tinyLogo: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10,
        marginVertical: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 10 
    },
    followButton: {
        backgroundColor: '#66ff33',
        marginRight: 20,
        width: '15%',
        alignItems: 'center',
        borderRadius: 20
    },
    blockButton: {
        backgroundColor: '#ff3300',
        marginRight: 20,
        width: '15%',
        alignItems: 'center',
        borderRadius: 20,
    }
  })