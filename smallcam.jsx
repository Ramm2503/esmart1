import react from "react";
import './smallcam.css'
import { Link } from "react-router-dom";
import Products from './product';
 export const Mirror=()=>{
    const products = [
    
        
  {
    id: "322",
    name: "Noise N1",
    img: "mi1.webp",
    price: "₹2,999",
    discount: "20% Off",
    rating: 5
  },
  {
    id: "323",
    name: "Noise New launched",
    img: "mi2.webp",
    price: "₹3,199",
    discount: "10% Off",
    rating: 4
  },
  {
    id: "324",
    name: "Fossil Gen 6",
    img: "mi3.webp",
    price: "₹3,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "325",
    name: "Titan Smart 3 ",
    img: "mi4.webp",
    price: "₹2,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "326",
    name: "FireBlout g3",
    img: "mi5.webp",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "327",
    name: "Noise ",
    img: "mi6.webp",
    price: "₹9,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "328",
    name: "boat",
    img: "mi7.webp",
    price: "₹10,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "329",
    name: "Noise g16 ",
    img: "mi8.webp",
    price: "₹12,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "330",
    name: "Titan ",
    img: "mi9.webp",
    price: "₹14,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "331",
    name: "Noise N1 ",
    img: "mi10.webp",
    price: "₹11,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "332",
    name: "Fossil WE2",
    img: "mi11.webp",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "333",
    name: "Blout",
    img: "mi12.webp",
    price: "₹1,599",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "334",
    name: "Noise g44",
    img: "mi13.webp",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "335",
    name: "Fossil F1",
    img: "mi14.webp",
    price: "₹12,799",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "336",
    name: "Titan",
    img: "mi15.webp",
    price: "₹4,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "337",
    name: "Titan New One",
    img: "mi16.webp",
    price: "₹3,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "338",
    name: "Fossil",
    img: "mi17.webp",
    price: "₹8,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "339",
    name: "Titan ",
    img: "mi18.webp",
    price: "₹7,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "340",
    name: "Fossil F3",
    img: "mi19.webp",
    price: "₹4,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "341",
    name: "Noise VS",
    img: "mi20.webp",
    price: "₹5,899",
    discount: "15% Off",
    rating: 4
  }



    
  ];

  return (
   <div>
    <h1 className="h1d">Camera </h1>
    <div className="product-gridcam">
      
      {products.map((item, index) => (
        <div className="card1cam" key={item.id}>
          <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="pricecam">{item.price}</div>
          <div className="discountcam">{item.discount}</div>
          <div className="ratingcam">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliverycam"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btncam">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};


    