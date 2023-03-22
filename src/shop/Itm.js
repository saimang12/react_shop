import { useNavigate, useParams } from "react-router-dom";

const Itm = ({ shopData, cart, setCart }) => {
    const { itm } = useParams();
    //itm === shopData.id;
    const Itm = shopData.find(it => String(it.id) === itm);
    const GO = useNavigate();

    const addCart = () => {
        GO(`/cart`)
        setCart([
            ...cart,
            {
                id: Itm.id,
                name: Itm.name,
                price: Itm.price,
                desc: Itm.description,
                num: 1,
                img: Itm.api_featured_image,
            }
        ])
    }
    return (
        <div className="itm--">
            {
                Itm && //객체검정... ?
                <>
                    <figure>
                        <img src={Itm.api_featured_image} alt="" />
                    </figure>
                    <strong>
                        {Itm.name}
                    </strong>
                    <p>
                        {Itm.description?.substr(0, 100)} {Itm.description?.length > 100 ? '...' : ''}
                    </p>
                    <button onClick={addCart}>Add Cart</button>
                </>
            }
        </div>


    )
}

export default Itm;