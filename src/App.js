import './App.css';
import {BrowserRouter, Route, Link, useParams} from "react-router-dom"
import {useState} from "react"

function Cabecera(props) {
   
  return (<>
  <h1>Rutas con Parámetros</h1>
  <p>Estás en el ejercicio 1</p>
  <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to={"/saludo/"+props.nombre}>Saludo</Link></li>
  </ul>
  </>)
}

function Saludo() {
  const {nombre} = useParams()
  
  return (<>
  <h1>Hola {nombre}</h1>
  </>)
}

function App() {
  
  let [texto,setTexto] = useState("")
  
  function cambiarTexto(e) {
    setTexto(e.target.value)
  }
  
  
  return (<BrowserRouter>
    <Cabecera nombre={texto}/>
  <Route exact path="/"></Route>
  <Route exact path="/saludo/:nombre">
    <Saludo/>
  </Route>
  <input type="text" value={texto} onChange={cambiarTexto}/>
  </BrowserRouter>)
}

export default App;
