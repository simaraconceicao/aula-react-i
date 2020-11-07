import UpperCase from './exemplos/UpperCase'
import Hello from './exemplos/Hello'
import CapsLock from './exemplos/CapsLock'
import Tick from './exemplos/Tick'
import Card from './exemplos/Card'
import Lista from './exemplos/Lista'
import OutraLista from './exemplos/OutraLista'

function App() {
  return (
    <div className="App">
      <UpperCase texto="componente 1: serio, eu to dizendo"/>
      <Hello qualquerNome="componente 2: Hello World"/>
      <CapsLock>componente 3: eu realmente to dizendo</CapsLock>
      <Tick/>
      <Card/>
      <Lista/>
      <OutraLista/>
    </div>
  )
}

export default App;
