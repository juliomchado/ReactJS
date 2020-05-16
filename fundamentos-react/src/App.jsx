import React from 'react'
import './App.css'

import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'



export default () => (

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Exemplo de Card" color="#FA6900">
                <Aleatorio min={10} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com parâmetro" color="#E8B71A">
                <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
            </Card>

            <Card titulo=" #01 - Primeiro componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>

    </div>

)


