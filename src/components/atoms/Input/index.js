import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Input = () => {
    return (
        <View>
            <TextInput style={styles.input}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#965F41',
        padding: 16
    }
})
