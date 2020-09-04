import React from 'react'
import { StyleSheet, View } from 'react-native'

const Indicator = () => {
    return (
        <View style={styles.container}>
        </View>
    )
}

export default Indicator

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#965F41',
        width: 135,
        marginBottom: 9
    }
})
