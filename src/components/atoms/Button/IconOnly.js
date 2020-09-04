import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Facebook } from '../../../assets'

const IconOnly = ({title}) => {
    return (
        <View style={styles.container}>
            <Facebook style={styles.icon}/>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default IconOnly

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: '#3B5998'

    },
    text: {
        fontSize: 18,
        color : '#3B5998',
        textAlign: 'center',
        flex: 1,
    },
    icon : {
        paddingHorizontal: 40,
        marginRight: -60,
        alignItems: 'center'
    }
})
