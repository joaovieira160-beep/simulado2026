
import { useState } from 'react'
import { dadosClima } from './dadosClima'
import { codigosWmo } from './codigosWmo'
import './App.css'

function App() {
  const [busca, setBusca] = useState('')
  const [cidade, setCidade] = useState(null)

  function buscar() {
    const resultado = dadosClima.find(
      item => item.name.toLowerCase() === busca.toLowerCase()
    )

    setCidade(resultado)
  }

  return (
    <div className='app'>
      <div className="primeira">  
        <img className='Imagem-logo' src="../src/components/images/solchuva.svg" alt="logo" />
        <h2>Sol Chuva</h2>
        <p>Tempo certo, onde você estiver.</p>
      </div>
      

<div className="segunda">
  <input
        className='Busca-input'
        value={busca}
        onChange={e => setBusca(e.target.value)}
        placeholder="Digite o nome de uma cidade..."
      />

      <button className='botao-busca' onClick={buscar}>Buscar</button>

</div>
      
      {cidade && (

        <div className='resultados'>
          <h2>{cidade.name}</h2>
          <p>Temperatura: {cidade.current.temperature_2m} °C</p>
          <p>Sensaçao: {cidade.current.apparent_temperature} °C/h</p>
          <p>Vento: {cidade.current.wind_speed_10m} km/h</p>
          <p>Umidade: {cidade.current.relative_humidity_2m}%</p>
          
          
          
        </div>
      )}
    </div>
  )
}

export default App