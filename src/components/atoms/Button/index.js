import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import IconOnly from './IconOnly';

const Button = ({title, type, onPress}) => {
    if(type === 'icon') {
        return <IconOnly title={title}/>
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === "secondary" ? '#E5E5E5' : '#965F41',
        paddingVertical: 16

    }),
    text: (type) => ({
        fontSize: 18,
        color : type === "secondary" ? '#965F41' : '#E5E5E5',
        textAlign: 'center'
    })
})
