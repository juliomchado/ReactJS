import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [nerd, setNerd] = useState(false)

    function comunicar(nomeParam, idadeParam , nerdParam) {
        setNome(nomeParam)
        setIdade(idadeParam)
        const verificacao = nerdParam ? 'Verdadeiro' : 'Falso'
        setNerd(verificacao)
        
    }


    return (
        <div>
            <div>Pai</div>
                {nome} {idade} {nerd}
            <IndiretaFilho test={comunicar}></IndiretaFilho>
        </div>

    )
}