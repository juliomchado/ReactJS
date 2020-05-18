import React from 'react'

import './TabelaProdutos.css'
import product from '../../data/produtos'


export default props => {

    const produtos = product.map((product, i) => {


        return (
            <tr key={product.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>R$ {product.preco.toFixed(2)}</td>
            </tr>
        )

    })


    return (
        <div className="TabelaProdutos"> 
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos}
                </tbody>

            </table>
        </div>
    )
}






