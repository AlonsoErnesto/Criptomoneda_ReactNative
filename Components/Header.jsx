import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'


const Header = () => {
    return (
        <View>
            <Text style={styles.encabezado}>
                Criptomonedas
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    encabezado:{    
        paddingTop:Platform.OS === 'ios'? 70 :30,
        // fontFamily:'Lato-Black2',
        backgroundColor:'#5E49E2',
        paddingBottom:10,
        color:"#fff",
        textAlign:'center',
        fontSize:20,
        textTransform:'uppercase',
        

    }
})
