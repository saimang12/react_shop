import { useState } from "react";

const Cart = ({ cart, setCart, shopData }) => {


    const allPrice = cart.reduce((current, next) => current + Number(next.price * next.num), 0);

    // cart 배열 수정하기
    const cartModify = (id) => {
        console.log(id, cart);
        const newCart = cart.map(it => it.id === id ? { ...it, num: it.num + 1 } : it);
        setCart(newCart);
    }


    return (

        <>
            <h1>
                장바구니
            </h1>
            {
                cart.map((it) => <li>
                    {it.id}
                    {it.name}
                    {it.desc}
                    {it.price}
                    {it.num}
                    <button onClick={() => { cartModify(it.id) }}>+</button>
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