import react from "react";
import products from './product';

import { Link } from "react-router-dom";

function ProductList(){
  console.log(products);
  
    
    return(
        <div>
            <h2>Products</h2>
            {products.map((product)=>(
                <div key={product.id}>
                    <Link to={`/products/${product.id}`} className="linktag">
                    <h3>{product.name}</h3>
                    <p>{product.img}</p>
                    <p>{product.details}</p>
                    <p>{product.price}</p>
                    <p>{product.discount}</p>
                    <p>{product.rating}</p>
                    
                    </Link>
                    </div>
            ))}
        </div>
    );
}
export default ProductList;