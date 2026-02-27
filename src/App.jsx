import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Contries/Countries'

const countriesPromised = fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json());

function App() {

  return (
    <>
    <h1>React world go</h1>
    <Suspense fallback={<p>contries loding.......</p>}>
   <Countries countriesPromised={countriesPromised}></Countries>
    </Suspense>
 
    </>
  )
}

export default App
