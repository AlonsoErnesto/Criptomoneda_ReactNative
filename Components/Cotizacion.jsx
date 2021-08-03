import React from 'react';
import { Text,StyleSheet,View } from 'react-native'

const Header = ({resultado,criptomoneda}) => {


    
    // Si el objeto esta vacio no retornara nada 
    if(Object.keys(resultado).length === 0) return  null;
    console.log(resultado)

    return ( 
        <View style={styles.container}>
         
                <Text style={styles.total}>{resultado.PRICE}</Text>
            <Text style={styles.texto}>Precio mas Alto del dia: </Text>
                <Text style={styles.span}>{resultado.HIGHDAY}</Text>
            <Text style={styles.texto}>Precio mas bajo del dia: </Text>
                <Text style={styles.span}>{resultado.LOWDAY}</Text>
            <Text style={styles.texto}>Variacion ultimas 24 horas</Text>
                <Text style={styles.span}>{resultado.CHANGEPCT24HOUR}%</Text>
            <Text style={styles.texto}>Ultima Actualizacion :</Text>
                <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
        </View>
     );
}


const styles = StyleSheet.create({

    container:{
        justifyContent:'center',
        position: 'relative',
        backgroundColor:'#2C3E50',
        padding: 10,
        marginTop:10,
        borderRadius:20,
        

    },
    texto:{
        fontSize:22,
        color:'#fff',
    },
    span:{
        fontWeight:'bold',
        fontSize:24,
        color:'#fff',
    },
    total:{
        textAlign:'center',
        fontSize:48,
        fontWeight:'bold',
        color: '#fff'
    }

})
 
export default Header;










