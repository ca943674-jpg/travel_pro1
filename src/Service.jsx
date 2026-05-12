import React from 'react'
import img1 from './assets/Udaypur_adventure1.jpg';
import img2 from './assets/honeymoon-banner.webp';
import img3 from './assets/family_fun.jpg';
import img4 from './assets/Corporate_tour.jpg';
import img5 from './assets/Hotel_booking.jpg';
import img6 from './assets/Flight_image.avif';
import Service1 from './Service1';
import Travel_gallary from './Travel_gallary';

const Service = () => {
    const data=[
        {id:1,name:"Adventure Tours",details:"Thrilling adventures for the bold at heart",img:img1},
        {id:2,name:"Honeymoon Packages",details:"Romantic getaways for couples",img:img2},
        {id:3,name:"Family Holidays",details:"Fun-filled trips for the whole family",img:img3},
        {id:4,name:"Corporate Travel",details:"Business travel solutions",img:img4},
        {id:5,name:"Hotel Booking",details:"Fun-filled trips for the whole family",img:img5},
        {id:6,name:"Flight Booking",details:"Easy flight reservations at best prices",img:img6},
    ]

  return (
    <div>
      <div className='text-center mt-3 fw-bold'>
        <h1>Our Services</h1>
        <h5>Complete travel solutions for every need</h5>
      </div>
      <div className='container'>
        <div className="row d-flex flex-lg-row flex-md-row flex-column align-items-center">
          {
            data.map((item) => (
              <div className="col-lg-4 col-md-6 col-12 mt-3" key={item.id}>
                <Service1 data={item} />
              </div>
            ))
          }
        </div>
      </div>
      <Travel_gallary/>
    </div>
  )
}

export default Service
