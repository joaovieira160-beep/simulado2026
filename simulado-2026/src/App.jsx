
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
          <h2 >{cidade.name}</h2>
          
          
          <div className="resultados-1">

            
          <div className="textos-temperatura">
            <p className='temperatura'>temperatura</p>
          <img src="../src/components/images/termometro.svg" alt="termometro" />
          <p>{cidade.current.temperature_2m} °C</p>
          </div>
          
          
          <div className="textos-sesacao">
            <p className="sensacao">Sensação</p>
            <img src="../src/components/images/termometro.svg" alt="termometro" />
          <p>{cidade.current.apparent_temperature} °C</p>
          </div>
         
        
         <div className="textos-vento">
           <p className="vento">Vento</p>
          <img src="../src/components/images/vento.svg" alt="img-vento" />
          <p>{cidade.current.wind_speed_10m} km/h</p>
         </div>

         
         <div className="textos-umidade">
          <p className="umidade">Umidade</p>
          <img src="../src/components/images/umidade.svg" alt="img-umidade" />
          <p>{cidade.current.relative_humidity_2m}%</p>
         </div>

         <div className="texto-precipitacao">
          <p className="precipitacao">Precipitação</p>
          <img src="../src/components/images/uv.svg" alt="img-umidade" />
          <p>{cidade.current.uv_index}</p>
         </div>
          
          <div className="texto-precipitacao">
          <p className="precipitacao">Precipitação</p>
          <img src="../src/components/images/uv.svg" alt="img-umidade" />
          <p>{cidade.current.weather_code}</p>
         </div>


          
          </div>
          
          
           
        </div>
      )}
    </div>
  )
}

export default App