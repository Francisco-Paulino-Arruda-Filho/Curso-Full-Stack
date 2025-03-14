import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { html, numerosAlfabeto, regex } from './regularsExpressions/base'
import lookahead from './regularsExpressions/lookhaead'
import { texto, encontraPalavras } from './regularsExpressions/encontraPalavras'

function App() {
  const [count, setCount] = useState(0)
  console.log(regex)
  console.log('Guloso')
  console.log(html.match(/<.+>.+<\/.+>/g)) // greedy 
  console.log('Não guloso')
  console.log(html.match(/<.+?>.+?<\/.+?>/g)) // non-greedy 
  // Pega só as tags html
  console.log(html.match(/<.+?>/g)) // lazy
  // Tira todas as tags html
  console.log(html.replace(/<.+?>/g, '')) // hola mundo Soy un div Soy otro p Soy otro div
  console.log(numerosAlfabeto.match(/[0-9]+/g)); // [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
  console.log(numerosAlfabeto.match(/[a-z]+/g)); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z' ]

  //Lookahead
  lookahead.forEach(str => console.log(str.match(/.*(?<!in)active$/gim)));
  lookahead.forEach(str => console.log(str.match(/.*(?<!active)$/gim)));
  //Lookbehind
  lookahead.forEach(str => console.log(str.match(/^ONLINE.*/gim)));
  lookahead.forEach(str => console.log(str.match(/^(?!ONLINE).*/gim)));
  console.log(texto.match(encontraPalavras)); // [ 'João', 'é', 'calmo', 'mas', 'no', 'transito', 'fica', 'nervoso' ]
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
