import React, { useState } from 'react'
import './Fiche.css'

var Fiche = props => {
	const initialFormState = { id: null, nom: '', prix: '' }
	const [ product, setProduct ] = useState(initialFormState)
	

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	return (
		<div className="container">
		<form 
			onSubmit={event => {
				event.preventDefault()
				
				if (!product.nom || !product.prix) return
					if (isNaN(product.prix)){
						document.getElementById("erreur").innerHTML="Entrer un nombre"
					}else{
						document.getElementById("erreur").innerHTML=""
						props.addProduct(product)
						props.setCount(props.count +1)
						setProduct(initialFormState)
					}				
			}}
			className="row"
		>
			
				
					<div className="top col-md-4">
						Produit
            <input type="text" name="nom" value={product.nom} onChange={handleInputChange} />
					</div>
					<div className="top col-md-4">
					Prix
			      <input type="text" name="prix" value={product.prix} onChange={handleInputChange} />
						Ar<p id="erreur"></p>
					</div>
					<div className="col-md-4">
						<button className="btn btn-primary">Ajouter</button>
					</div>
				        

		</form>
		</div>
	)
}



export default Fiche