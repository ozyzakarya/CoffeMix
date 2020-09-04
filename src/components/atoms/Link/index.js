import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Link = ({title, align, size}) => {
    return (
        <View>
            <Text style={styles.title(align, size)}>{title}</Text>
        </View>
    )
}

export default Link

const styles = StyleSheet.create({
    title: (align, size) => ({
        fontSize: size,
        color: '#333333',
        textAlign: align
    })
})
