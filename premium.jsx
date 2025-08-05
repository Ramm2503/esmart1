import react from "react";
import './premium.css';
import { Link } from "react-router-dom";
import Products from './product';

export const Premium=()=>{
    const products = [
    
        
    {
        id: "1",
        name: "Noise N1",
        img: "w1.webp",
        price: "₹12,999",
        discount: "20% Off",
        rating: 5
    },
    {
        id: "2",
        name: "Noise New launched",
        img: "w2.webp",
        price: "₹11,199",
        discount: "10% Off",
        rating: 4
    },
    {
        id: "3",
        name: "Fossil Gen 6",
        img: "w3.webp",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "4",
        name: "Titan Smart 3 ",
        img: "w4.webp",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "5",
        name: "FireBlout g3",
        img: "w20.webp",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "6",
        name: "Noise ",
        img: "w6.webp",
        price: "₹9,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "7",
        name: "boat",
        img: "w7.webp",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "8",
        name: "Noise g16 ",
        img: "w12.webp",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "9",
        name: "Titan ",
        img: "w9.webp",
        price: "₹14,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "10",
        name: "Noise N1 ",
        img: "w10.webp",
        price: "₹11,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "11",
        name: "Fossil WE2",
        img: "w11.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "12",
        name: "Blout",
        img: "w12.webp",
        price: "₹1,599",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "13",
        name: "Noise g44",
        img: "w13.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "14",
        name: "Fossil F1",
        img: "w14.webp",
        price: "₹2,799",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "15",
        name: "Titan",
        img: "w15.webp",
        price: "₹12,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "16",
        name: "Titan New One",
        img: "w16.webp",
        price: "₹13,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "17",
        name: "Fossil",
        img: "w17.webp",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "18",
        name: "Titan ",
        img: "w18.webp",
        price: "₹10,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "19",
        name: "Fossil F3",
        img: "w19.webp",
        price: "₹10,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "20",
        name: "Noise VS",
        img: "w20.webp",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    }
];


    
  

  return (
   <div>
    <h1 className="h1d">Premium collections</h1>
    <div className="product-grid">
      
      {products.map((item, index) => (
        <div className="card1" key={item.id}>
            <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="price">{item.price}</div>
          <div className="discount">{item.discount}</div>
          <div className="rating">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="delivery"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btn">Add to Cart</button>
          </Link>
        </div>
        
      ))}
      
    </div>
    

    </div>
  );
};