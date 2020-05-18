import React, { useState } from 'react'
import './Mega.css'

export default props => {


    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumero] = useState(numerosIniciais)


    function gerarNumeroNaoContindo(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
        return array.includes(aleatorio) ? gerarNumeroNaoContindo(min, max, array) : aleatorio
    }

    function gerarNumeros(qtd) {
        const numeros = Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContindo(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }


    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(" ")}</h3>
            <div>
                <label>Quantidade de números: </label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumero(gerarNumeros(+e.target.value))

                    }} />
            </div>
            <button onClick={_ => setNumero(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}