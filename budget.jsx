import react from "react";
import './budget.css';
import Products from './product';
import { Link } from "react-router-dom";

export const Budget=()=>{
    const products = [
    
        
    {
        id: "41",
        name: "Noise N1",
        img: "w50.webp",
        price: "₹1,999",
        discount: "20% Off",
        rating: 5
    },
    {
        id: "42",
        name: "Noise New launched",
        img: "w51.webp",
        price: "₹1,199",
        discount: "10% Off",
        rating: 4
    },
    {
        id: "43",
        name: "Fossil Gen 6",
        img: "w52.webp",
        price: "₹1,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "44",
        name: "Titan Smart 3 ",
        img: "w53.webp",
        price: "₹2,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "45",
        name: "FireBlout g3",
        img: "w54.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "46",
        name: "Noise ",
        img: "w55.webp",
        price: "₹2,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "47",
        name: "boat",
        img: "w56.webp",
        price: "₹3,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "48",
        name: "Noise g16 ",
        img: "w57.webp",
        price: "₹2,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "49",
        name: "Titan ",
        img: "w59.webp",
        price: "₹4,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "50",
        name: "Noise N1 ",
        img: "w51.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "51",
        name: "Fossil WE2",
        img: "w60.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "52",
        name: "Blout",
        img: "w61.webp",
        price: "₹1,599",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "53",
        name: "Noise g44",
        img: "w62.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "54",
        name: "Fossil F1",
        img: "w63.webp",
        price: "₹2,799",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "55",
        name: "Titan",
        img: "w31.webp",
        price: "₹1,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "56",
        name: "Titan New One",
        img: "w65.webp",
        price: "₹3,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "57",
        name: "Fossil",
        img: "w70.webp",
        price: "₹1,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "58",
        name: "Titan ",
        img: "w67.webp",
        price: "₹1,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "59",
        name: "Fossil F3",
        img: "68.webp",
        price: "₹1,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "60",
        name: "Noise VS",
        img: "w69.webp",
        price: "₹1,899",
        discount: "15% Off",
        rating: 4
    }
];


    


  return (
   <div>
    <h1 className="h1d">Budget collections</h1>
    <div className="product-grid">
      
      {products.map((item, index) => (
        <div className="card1" key={index}>
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