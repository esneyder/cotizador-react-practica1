import React, {Component} from 'react';
import Header from './Header'
import Formulario from './Formulario'
import Resumen  from './Resumen'

import {obtenerDiferenciaAnio,calcularMarca,obtenerPlan} from './../helper'
class App extends Component {
  state = {
    resultado:'',
    datos:{}
  }
  cotizarSeguro =(datos) => {
    const {marca,anno,plan} = datos
    let resultado = 2000
    const diferencia = obtenerDiferenciaAnio(anno);
    
    resultado -=((diferencia * 3) * resultado) / 100;
    resultado = calcularMarca(marca) * resultado;

    let incrementoPlan = obtenerPlan(plan)
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    this.setState({resultado:resultado,datos:datos})
   
  }
  render(){
    return (
      <div className="contenedor">
        <Header titulo = "Cotizador seguros"/>
        <div className="contenedor-formulario">
        <Formulario cotizarSeguro ={this.cotizarSeguro}/>
        <Resumen
         datos={this.state.datos}
         resultado ={this.state.resultado}
         />
        
        </div>
      </div>
    );
  }
}

export default App;
