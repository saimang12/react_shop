import { useState } from "react";

const Cart = ({ cart, setCart, shopData }) => {

    const [num, setNum] = useState(1)

    const allPrice = cart.reduce((current, next) => current + Number((next.price) * num), 0);


    return (

        <>
            <h1>
                장바구니
            </h1>
            {
                cart.map((it) => <li>{it.name}{it.desc}{it.price}{num} <button onClick={() => setNum(num + 1)}>+</button>
                    <img src={it.img} alt="" />
                </li>)
            }
            <h2>
                합계 :
                {
                    allPrice
                }
            </h2>
        </>
    )
}

export default Cart;