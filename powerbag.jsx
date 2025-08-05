import react from "react";
import './powerbag.css'
import {Link} from 'react-router-dom'
import Products from './product';

export const Power=()=>{
    return(
        <div className="powerdiv">
            <video src={"./power.mp4"} autoPlay className="video" controls muted/>
            <img src={"./power20.png"} alt="" />
            <div className="carousel">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={"./power13.gif"} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={"./power14.gif"} class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={"./power15.gif"} class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={"./power16.jpg"} class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={"./power17.jpg"} class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={"./power18.jpg"} class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={"./power19.jpg"} class="d-block " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className="powerimg">
<Link to="/applebank"><img src={"./power21.png"} alt="" /></Link>
<Link to="/samgungbank"><img src={"./power22.png"} alt="" /></Link>
<Link to="/xiaomibank"><img src={"./power24.png"} alt="" /></Link>
{/* <Link to="/amazon"><img src={"./power25.png"} alt="" /></Link> */}
</div>
        </div>
    )
}