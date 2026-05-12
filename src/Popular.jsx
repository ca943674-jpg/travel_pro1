import React from 'react'
import Card1 from './Card1'
import img1 from './assets/Udaypur.jpg';
import img2 from './assets/Ambaji-Temple-Banner.jpg';
import img3 from './assets/Polo-Forest-Banner1.jpg';
import img4 from './assets/Jaipur.jpg';
import img5 from './assets/Jagannath.jpg';
import img6 from './assets/Dwarka.jpg';
import Featured from './Featured';


const Popular = () => {
    const data=[
        {id:1,name:"Udaypur" , day:3,img:img1},
        {id:2,name:"Ambaji" , day:1,img:img2},
        {id:3,name:"PoloForest" , day:2,img:img3},
        {id:4,name:"Jaipur" , day:3,img:img4},
        {id:5,name:"Jagannath" , day:2,img:img5},
        {id:6,name:"Dwarka" , day:2,img:img6},
    ]
    
  return (
    <div>
        
        <div className='text-center mt-3'>
            <h2>Popular Destination</h2>
            <h5>Explore our most loved destinations</h5>
        </div>
        <div className='container-fluid px-5 overflow-hidden'>
            <div className="row">
                {
                    data.map((item)=>(
                        <div className="col-lg-4 mt-3 col-md-6 col-12 d-flex align-items-center justify-content-center" key={item.id}>
                            <Card1 name1={item.name} day={item.day} img={item.img}/>
                        </div>
                    ))
                }
            </div>
            
        </div>
        <br />
        <br />
        <Featured/>
    </div>
  )
}

export default Popular
