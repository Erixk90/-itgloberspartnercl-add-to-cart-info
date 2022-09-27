import React from 'react'
import { useProduct } from 'vtex.product-context';
import { useOrderForm } from 'vtex.order-manager/OrderForm';
//import ButtonGroup from './ButtonGroup';
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'
//import Totalizers from './Totalizers';
//import ProductGroup from './ProductGroup';

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
    const container = generateBlockClass(styles.container, blockClass)
    const container__item = generateBlockClass(styles.container__item, blockClass)
    const container__image = generateBlockClass(styles.container__image, blockClass)
    const container__description = generateBlockClass(styles.container__description, blockClass)
    const container__summary = generateBlockClass(styles.container__summary, blockClass)
    const summary__price = generateBlockClass(styles.summary__price, blockClass)
    const container__checkout = generateBlockClass(styles.container__checkout, blockClass)
    const button__checkout = generateBlockClass(styles.button__checkout, blockClass)
    const button__checkout__cart = generateBlockClass(styles.button__checkout__cart, blockClass)
    const button__checkout__cart_a = generateBlockClass(styles.button__checkout__cart_a, blockClass)
    const productInfo = useProduct()
    const { orderForm: {
        items,
        totalizers
    } } = useOrderForm()


    console.log("este producto tiene esta info", productInfo)
    console.log("esta es mi información de la orden", /*items,*/ totalizers[0])

    return (
        <div className={container}>
            {/*<ProductGroup />   Listado de Productos */}

            {
                items.map((item: any, index: number) => {
                    console.log(item)

                    return (
                        <div key={index} className={container__item}>
                            <div className={container__image}>
                                <img src={item.imageUrls.at1x} />
                            </div>
                            <div className={container__description}>
                                <p>{item.name}</p>
                                <p> Id Producto:{item.id}</p>
                                <p>${item.price / 100}</p>
                                <p> Cant: {item.quantity}</p>
                            </div>
                        </div>
                    )
                })
            }
            {/* <Totalizers totalizers={totalizers=[0]}/>   Valor total */}

            <div className={container__summary}>
                <p> Tenemos {items.length} items en tu compra</p>
                <p className={summary__price}> Total : ${totalizers[0]?.value / 100}</p>
            </div>
            {/*<ButtonGroup  />  Acciones */}
            <div>
                <div className={container__checkout}>
                    <a className={ button__checkout__cart} href='/checkout'> CHECK OUT</a>
                </div>
                <div>
                    <button  className={ button__checkout}><a className={ button__checkout__cart} href='/construccion'>CONTINÚA COMPRANDO</a></button>
                    <a href='/checkout/#/cart'  className={ button__checkout__cart_a}> VER CARRITO</a>
                </div>
            </div>
        </div>


    )
}
export default AddToCartInfo
