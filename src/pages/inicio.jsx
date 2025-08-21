import '../style/styleInicio.scss'
import { Link, Links, Scripts } from 'react-router';


export default function Inicio (){
    


   async function somar() {
        let n1 = document.getElementById('numero1').value
        let n2 = document.getElementById('numero2').value

        let url = `http://localhost:5010/calculadora/somar/${n1}/${n2}`

       let response = await fetch(url)

       let dados = await response.json()

       document.getElementById('resposta').innerText = "O resultado é: " + String(dados.total)
    }



return(
    <div>
        <header className="header">
            <div className="cabec">
                <img src="/src/assets/images/frei.webp" height={40} />
                <h1 className="h1">React FreiS</h1>
            </div>
            <div className="li"> 
           <Link to = {"/"} className="link">
                <li>Inicio</li>
                </Link>
                <li>Sobre</li>
            </div>
        </header>
        <main>
            <div className="main">
                <Link to = {"/"} >
                <img src="/src/assets/images/seta.webp" height={40} />
                </Link>
                <h1 className="titulo"> Teste React 1 - Somar dois números</h1>
            </div>
            
            <div className="linha-amarela"></div>
            
            <div className="enunciado">
                 <p className="card">Implementar um programa em Java Script para calcular a soma de dois números.</p>
            </div>
    <div className="contas">  
         <div className="card2">
             <h3 className="text">Informe o valor do primeiro número </h3>
             <input type='text'  id='numero1'  />
             <br />
             <h3 className="text">Informe o valor do segundo número </h3>
              <input type='text' id='numero2' />
             <br />
             <div className="local">
                 <button onClick={somar}>executar</button>
             </div>
            </div>
          </div> 
        <div>
            
            <h2 id='resposta' className='resultado'>O resultado é:</h2>
        </div>
        </main>
    </div>
    
)
}