import React, { useState } from 'react';
import UserTable from './components/UserTable';
import Fiche from './components/Fiche';
import Somme from './components/Somme';
import './App.css';
import Popup from './components/Popup'

var App = () => {
  const productsData = []
  const [products, setProducts] = useState(productsData)
  const [count, setCount] = useState(0)
  
  const addProduct = product => {
	 	product.id = count
		setProducts([ ...products, product ])
  }
  const deleteProduct = id => {
    setProducts(products.filter(product => product.id !== id))
  }
  const [ editing, setEditing ] = useState(false)
  const initialFormState = { id: null, nom: '', prix: '' }
  const [ currentProduct, setCurrentProduct ] = useState(initialFormState)

  const editProduct = product => {
    setEditing(true)
    setCurrentProduct({ id: product.id, nom: product.nom, prix: product.prix })
  }
  
  const updateProduct = (id, updatedProduct) => {
    setEditing(false)  
    setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
  }

  return (
    <div className="container">      
      <div className="flex-row">
        <div className="flex-large"> 
          {editing?(
                                
           //                                     
            <Popup className ="rado"
            editing={editing}
            setEditing={setEditing}
            currentProduct={currentProduct}
            updateProduct={updateProduct}
          />
           
		  
            
            ):(''
              
          )}  
          <Fiche addProduct={addProduct} setCount={setCount} count={count}/>       
          
                
          <UserTable products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
          <Somme products={products}/>
        </div>
      </div>

      

    </div>

  )
}

export default App

