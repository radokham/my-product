import React from 'react';
import './Somme.css'

var Somme = props => {
    return(
        <form onSubmit={event => {
            event.preventDefault()
            var adition = 0
            props.products.map(
                
                product => (adition += parseInt(product.prix))
            )          
              
            document.getElementById("total").innerHTML=adition.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')				
        }} >
           <button id="boutot" className="btn btn-secondary">TOTAL</button>
           <br/>
           <div id="result">&nbsp;&nbsp;TOTAL= &nbsp;&nbsp;<span id="total"/>&nbsp;&nbsp;Ar</div>         
        </form>
    )    
}
    
    
    

   
export default Somme