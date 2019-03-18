import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import './UserTable.css'


const UserTable = props => (  
  
	<table className="table table-hover">
		<thead className="table table-hover">
			<tr>
          <th>Id</th>
          <th>Produits</th>
          <th>Prix</th>
          <th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.products.length > 0 ? (
                
				props.products.map(product => (
          
					<tr key={product.id}>            
            <td> {product.id+1}</td>
						<td> {product.nom.charAt(0).toUpperCase() + product.nom.substring(1).toLowerCase()}</td>
						<td className="price"> {product.prix}</td>                        
            <td>
							<button  onClick={
                

                                    () => confirmAlert({
                                      
                                        title : 'Supression Produit',
                                        message: product.nom.charAt(0).toUpperCase() + product.nom.substring(1).toLowerCase(),
                                        buttons: [
                                          {
                                            label: 'OUI',
                                            onClick: () => props.deleteProduct(product.id)
                                          },
                                          {
                                            label: 'NON',
                                            onClick: () => ''
                                          }
                                        ]
                                      }) 
                                    
                                }
                                className="btn btn-danger">X
                            </button>            
              <button onClick={() => {
                      props.editProduct(product)
                    }                
                }
                className="btn btn-success">Edit
              </button></td>						
					</tr>
          
          
                ))
      ) : ''}
      
		</tbody>    
	</table>
)



export default UserTable