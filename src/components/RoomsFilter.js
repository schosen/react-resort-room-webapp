import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

//get all unique values for room type dropdown
const getUnique = (item,value) => {
    return [...new Set(item.map(item =>item[value]))]
}


export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context;

    //get unique types
    let types = getUnique(rooms, 'type');

    //add all for all the properties
    types = ['all',...types];

    //map to jsx
    types =types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })




    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) => {
        return <option key={index} value={item}>{item}</option>
    })





    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/*select type*/}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>

          {/*End of select type*/}
          {/*Guests*/}
          <div className="form-group">
            <label htmlFor="capacity">Guest</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {people}
            </select>
          </div>

          {/*End guest*/}
          {/* Room Price */}
          <div className="form-group">
              <label htmlFor="price">
                  room price ${price}
              </label>
              <input type="range" name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control'/>
          </div>
          {/* End of Room Price */}
        </form>
      </section>
    );
}
