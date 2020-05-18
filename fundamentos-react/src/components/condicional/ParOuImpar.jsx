import React from 'react'


export default props => {

    const isPar = props.valor % 2 === 0

    return (
        <div>
            Numero = {props.valor} ele é {isPar ? <span>Par</span> : <span>Impar</span>}
        </div>
    )

}


