
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import Formulario from './Components/Formulario';
import Header from './Components/Header'
import Cotizacion from './Components/Cotizacion'
import axios from 'axios'

export default function App() {

    const [moneda, setMoneda] = useState('')
    const [criptomoneda, setCriptomoneda] = useState('') 
    const [consultarApi, setConsultarApi] = useState(false);
    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(()=>{
      const cotizarCriptoMoneda = async () => {
        
        if(consultarApi)
        { 
           const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

            const consultar = await axios.get(url);
            
            setCargando(true);
            setTimeout(() => {
              
              setResultado(consultar.data.DISPLAY[criptomoneda][moneda]);
              setConsultarApi(false)
              setCargando(false )
            }, 3000);
        }
      }

      cotizarCriptoMoneda();

    },[consultarApi])

    const componente = cargando ? (<ActivityIndicator size="large" style={{marginTop:60}} color="#2C3E50" />) :   <Cotizacion criptomoneda={criptomoneda} resultado={resultado}/>


  return (
    <>
      <Header/>
      <Image
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contenido}>
        <Formulario
          moneda={moneda}
          criptomoneda={criptomoneda}
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
          setConsultarApi={setConsultarApi}
        />
      {componente}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen:{
    width: '100%',
    height: 150,
  },
  contenido:{
    marginHorizontal:'2.5%'
  }

});
