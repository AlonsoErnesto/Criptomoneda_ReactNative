import React,{useState,useEffect} from 'react';
import {  StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native'
import {Picker} from '@react-native-community/picker'

import axios from 'axios'

const Formulario = (props) => {

    const { setCriptomoneda, setMoneda,criptomoneda,moneda,setConsultarApi } = props;
    const [criptomonedas, setCriptomonedas] = useState([])
    
    const AlertError = () => {
        
        Alert.alert(
                
            "Error",
            "Vuela a ingresar ",
            [   
                {text:'OK'}

            ]
        )
        return;
    }

    const cotizarPrecio = () => {
        if(!moneda || !criptomoneda)
        {
            AlertError();
            return;
        }else {
            setConsultarApi(true);
        }   
    }

    const obtenerMoneda = (moneda) => {
        setMoneda(moneda)
    }


    const obtenerCripto = (cripto) => {
        setCriptomoneda(cripto)
    }

    useEffect(() => {
        
        const consultar = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url);
            setCriptomonedas(resultado.data.Data)
        }
        consultar();

    }, [])


    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker itemStyle={{height:120 }} onValueChange={(moneda) => obtenerMoneda(moneda)} selectedValue={moneda}>
                <Picker.Item label="- Seleccione -" value=""/>
                <Picker.Item label="Dolar de Estados Unidos" value="USD"/>
                <Picker.Item label="Peso Mexicano" value="MXN"/>
                <Picker.Item label="Euro" value="EUR"/>
                <Picker.Item label="Libra Esterlina" value="GBP"/>
                <Picker.Item label="Sol Peruano" value="PEN"/>

            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
            <Picker  itemStyle={{height:120}} onValueChange={(cripto) => obtenerCripto(cripto)} selectedValue={criptomoneda}>
                <Picker.Item label="- Seleccione -" value=""/>
                {criptomonedas.map(cripto => (<Picker.Item key={cripto.CoinInfo.Id} value={cripto.CoinInfo.Name} label={cripto.CoinInfo.FullName}/>))}

            </Picker>

            <TouchableHighlight style={styles.btnCotizar} onPress={cotizarPrecio}> 
                <Text style={styles.textCotizar}>Cotizar</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Formulario

const styles = StyleSheet.create({

    label:{
        fontWeight:'100',
        fontSize:22,
        marginVertical:20
    },
    textCotizar:{
        textAlign:'center',
        color:'#fff',
        fontSize:20
    },  
    btnCotizar:{
        marginTop:20,
        backgroundColor:'#6494e3',
        paddingVertical:10,
        borderRadius:10
    }

})
