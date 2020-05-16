import React from 'react'


export default props => {

    const valor = parseInt(Math.random() * (props.max - props.min) + props.min);

    return (
        <h1>Valor aleatório: {valor}</h1>

    )
}

