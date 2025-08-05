import react from "react";
import './dslr.css'
import { Link } from "react-router-dom";
import Products from './product';

export const Dslr=()=>{

const products = [
    
    
  {
    id: "382",
    name: "Noise N1",
    img: "d1.webp",
    price: "₹2,999",
    discount: "20% Off",
    rating: 5
  },
  {
    id: "383",
    name: "Noise New launched",
    img: "d2.webp",
    price: "₹3,199",
    discount: "10% Off",
    rating: 4
  },
  {
    id: "384",
    name: "Fossil Gen 6",
    img: "d3.webp",
    price: "₹3,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "385",
    name: "Titan Smart 3 ",
    img: "d4.jpg",
    price: "₹2,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "386",
    name: "FireBlout g3",
    img: "d5.jpg",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "387",
    name: "Noise ",
    img: "d6.jpg",
    price: "₹9,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "388",
    name: "boat",
    img: "d7.jpg",
    price: "₹10,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "389",
    name: "Noise g16 ",
    img: "d8.jpg",
    price: "₹12,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "390",
    name: "Titan ",
    img: "d9.jpg",
    price: "₹14,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "391",
    name: "Noise N1 ",
    img: "d10.jpg",
    price: "₹11,499",
    discount: "30% Off",
    rating: 3
  }
];

    
  

  return (
   <div>
    <h1 className="h1d">Camera </h1>
    <div className="product-gridins">
      
      {products.map((item, index) => (
        <div className="card1dslr" key={item.id}>
          <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="pricedslr">{item.price}</div>
          <div className="discountdslr">{item.discount}</div>
          <div className="ratingdslr">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliverydslr"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btndslr">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};


    