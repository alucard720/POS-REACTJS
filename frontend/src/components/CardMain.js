import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function CardMain() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [cart, setCart] = useState([]);
    const [tax, setTax] = useState();

    const Dtax = 18;
    const percentage = parseFloat(Dtax)+'%';
    const Dtax2 = 0.18
 

    const fetchProducts = async()=>{
        setLoading(false)
        const result = await axios.get('http://localhost:5000/products')
        setProducts(await result.data)       
     

    }
    useEffect(()=>{
        fetchProducts()
    })
    
    const calculate = (newCart)=>{
        let pretax = 0;
        for(let i=0; i < newCart.length; i++){
            pretax = pretax + newCart[i].Precio;
        }
        setTax((tax)=> pretax)
    }


    const addItem = (Nombre, Precio)=>{
        let newCart = cart;       

        newCart =[...cart, {Nombre,Precio}];
        setCart((cart)=> newCart);
       calculate(newCart)


    }


    const removeCartItem=(whichItem)=>{
        let newCart = [];
        for(let i=0; i < cart.length; i++){
            if(i!== whichItem){
                newCart.push(cart[i])
            }
        }
        setCart((cart)=> newCart);
        calculate(newCart)
    }


  return (
    
    
    <div className='row'>
<div className='col-md-8 scrollable-column' >
    <h2>Productos</h2>
    {loading ? <div><h3>Loading</h3></div> : <div className='d-grid gap-3' style={{gridTemplateColumns: "220px 220px 220px 220px"}}>
    {products.length > 0 ? products.map((item, key)=>{
            return<div  key={key} className="">
            <Card className='' >
            <Card.Body>
                <Card.Img src={item.imagen} alt="" className='banner-image'/>
                <Card.Title className='card-info'>{item.Nombre}</Card.Title>
                <div className='button-wrapper'>
                <Button variant='info' className='btn outline'>${" " + item.Precio}</Button>
                <Button variant='info' className='btn fill' onClick={()=>addItem(item.Nombre, item.Precio)} >ADD TO CART</Button>
                    </div>
                </Card.Body>                
            </Card>

</div>}
         
        ):null}

    </div>} 
</div>
  
    <div className='col-md-4 fixed-column' >
    <h2>Cart</h2>
    <div className='list-group'>
        {cart.length > 0 ? cart.map((cartItem, i)=>{

            return(<li key={i} className='list-group-item'>
            {cartItem.Nombre} {" " +cartItem.Precio}<span className='fa fa-trash' onClick={()=>removeCartItem(i)}></span></li>)
        }):null}
    </div>
    {cart.length > 0 ? 
    <ul className='list-unstyled'>
        <li>Itbis ${percentage}</li>
        <li><h4>Sin Itbis ${tax.toFixed(2)}</h4></li>
        <li><div className='alert alert-success' role='alert'><h3 className=''> Total con Itbis ${((Dtax2 * tax)+ tax).toFixed(2)}</h3></div></li>

    </ul>    
     :    
    null}
    </div>
    
    </div>)
}





export default CardMain