
import { useState } from 'react'
import { dadosClima } from './dadosClima'
import { codigosWmo } from './codigosWmo'
import './App.css'

function App() {
  const [busca, setBusca] = useState('')
  const [cidade, setCidade] = useState(null)
  const [wmo, setWmo] = useState(null)

  function buscar() {
    const resultado = dadosClima.find(
      item => item.name.toLowerCase() === busca.toLowerCase()
    )

    setCidade(resultado)

    if(resultado){
      setWmo(resultado.current.weather_code)
    }
  }

const clima = codigosWmo.find(
   item => item.codigo === wmo
)

const previsao = cidade?.daily || []

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
          <h3>{clima.descricao}</h3>
          <h3>{clima.icone}</h3>
          
          
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
          
         


          </div>

          <div className="previsao">
          <h2>Previsão para os próximos dias</h2>

           <div className="previsao-container">

            {previsao.map((dia, index) => {

            const climaDia = codigosWmo.find(
            item => item.codigo === dia.weather_code
      )

      return (
        <div className="card-previsao" key={dia.date}>

          <h3>
            {index === 0 ? 'Hoje' : new Date(
              dia.date + 'T12:00:00'
            ).toLocaleDateString('pt-BR', {
              weekday: 'short',
              day: '2-digit',
              month: '2-digit'
            })}
          </h3>

          <p className="icone-previsao">
            {climaDia?.icone}
          </p>

          <p>{climaDia?.descricao}</p>

          <div className="temperaturas-previsao">
            <span>Máx: {dia.temperature_2m_max}°C</span>
            <span>Min: {dia.temperature_2m_min}°C</span>
          </div>

          <p>
            Chuva: {dia.precipitation_probability_max}%
          </p>

        </div>
      )
    })}

  </div>
</div>
          
          
           
        </div>
      )}
    </div>
  )
}

export default App