
import React, { useState, useEffect } from 'react'
import './Popup.css'


const Popup = props => {
	
	const [ product, setProduct ] = useState(props.currentProduct)

	useEffect(
		() => {
		  setProduct(props.currentProduct)
		},
		[ props ]
	)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	return (
				<form
					onSubmit={event => {
						event.preventDefault()
						if (isNaN(product.prix)){
							document.getElementById("erreur").innerHTML="Entrer un nombre"
						}else{
							props.updateProduct(product.id, product)
						}	
						
					}}
				>
					
					<input type="text" name="prix" value={product.prix} onChange={handleInputChange} />
					<br/><span id="erreur"></span><br/>
					<button>OK</button>
					<button onClick={() => {props.setEditing(false);}} className="button muted-button">
						Annuler
					</button>
				</form>
		
	)
}

export default Popup