import React from 'react'
import "./Search_filter.css"
import Destination_card from './Destination_card'
function Search_filter() {
  return (
    <div className='w-100 d-flex justify-content-center align-items-center mt-5 mx-auto'>
        <div className='bg-white border border-1 rounded rounded-2 p-3 d-flex justify-content-center align-items-center gap-3 w-75'>
            <div className=' search_input_wrapper'>
              <i class="fa-solid fa-magnifying-glass" id='search_icon'></i>
              <input type="text" placeholder="Search destinations..." className='w-24 h-10 rounded rounded-2'  id='filter'/>
            </div>
            <select name="" id="filter" className='w-25 h-10 rounded rounded-2'>
              <option value="">All Regions</option>
              <option value="">North</option>
              <option value="">South</option>
              <option value="">East</option>
              <option value="">West</option>
            </select>
            <select name="" id="filter" className='w-25 h-10 rounded rounded-2'>
              <option value="">Price Range</option>
              <option value="">Under ₹5000</option>
              <option value="">₹5000 - ₹10000</option>
              <option value="">₹10000 - ₹20000</option>
              <option value="">₹20000+</option>
            </select>
            <button className='btn btn-primary' id='filter'>
              <i class="fa-solid fa-filter"></i>
              Filter
            </button>
        </div>
        <Destination_card/>
    </div>
  )
}
export default Search_filter
