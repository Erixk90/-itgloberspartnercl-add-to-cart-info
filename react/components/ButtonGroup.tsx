import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const ButtonGroup = ({ blockClass }:{ blockClass: string }) => {

const container__checkout = generateBlockClass (styles.container__checkout, blockClass)


    return (
        <div>
            <div className={container__checkout}>
        <a href='/'> CHECK OUT</a>
            </div>
            <div>
                <button>CONTINÚA COMPRANDO</button>
                <a href='/'> VER CARRITO</a>
            </div>
        </div>
    )
}

export default ButtonGroup