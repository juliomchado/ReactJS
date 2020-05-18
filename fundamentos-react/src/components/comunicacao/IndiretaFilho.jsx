import React from 'react'


export default props => {

    const gerarIdade = parseInt(Math.random() * (20) + 50)
    const gerarNerd = Math.random() > 0.5
    const funcao = props.test

    return (
        <div>
            <div>Filho</div>
            <button  style={{cursor: 'pointer'}}onClick={_ => funcao('Gabriel', gerarIdade, gerarNerd)}>Fornecer informações</button>
        </div >

    )
}