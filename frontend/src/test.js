import React, { useState } from "react";

const Cart = () => {

    let [cartList, setCartList] = useState([]);
    let [preTax, setPreTax] = useState(0.00);

    const tax = .08;
    const items = [
        { itemName: "ice", price: 2.99 },
        { itemName: "salt", price: 1.95 },
        { itemName: "plates", price: 4.90 },
        { itemName: "firewood", price: 6.25 },
        { itemName: "matches", price: .99 }];


    const calculate = (tempCart) => {
        let tempPreTax = 0;
        for (let i = 0; i < tempCart.length; i++) {
            tempPreTax = tempPreTax + tempCart[i].price;
        }
        setPreTax((preTax) => tempPreTax);
    }


    const addItem = (itemName, price) => {
        let tempCart = cartList;

        tempCart = [...cartList, { itemName, price }];
        setCartList((cartList) => tempCart);
        calculate(tempCart);

    }

    const removeCartItem = (whichItem) => {
        let tempCart = [];
        for (let i = 0; i < cartList.length; i++) {
            if (i !== whichItem) {
                tempCart.push(cartList[i])
            }
        }
        setCartList((cartList) => tempCart);
        calculate(tempCart);

    }


    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Items</h2>

                <div className="list-group">
                    {items.length > 0 ? items.map((item, i) => {
                        return <button type="button" key={i} className="list-group-item list-group-item-action capitalize"
                            onClick={() => addItem(item.itemName, item.price)}>{item.itemName + " - $" + item.price}</button>
                    })

                        : null}
                </div>



            </div>
            <div className="col-md-6">
                <h2>Cart</h2>
                <div className="list-group">
                    {cartList.length > 0 ? cartList.map((cartItem, i) => {

                        return (<li key={i} className="list-group-item ">

                            <i className="fa fa-trash pointer" onClick={() => removeCartItem(i)}></i> <span className="capitalize">{cartItem.itemName}</span></li>)
                    }) : null}
                </div>
                {cartList.length > 0 ?

                    <ul className="list-unstyled">
                        <li>Tax ${tax.toFixed(2)}</li>
                        <li><h4>Pre Tax ${preTax.toFixed(2)}</h4></li>

                        <li><div className="alert alert-success" role="alert"><h3 className="">Total ${((preTax * tax) + preTax).toFixed(2)}</h3></div>

                        </li>
                    </ul>
                    : null}

            </div>
        </div>)
}

export default Cart;