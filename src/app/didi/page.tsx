"use client"
import React, { useState,useEffect } from 'react';
import Select from 'react-select';

const options = [
    { value: 'Vegetarian', label: 'Vegetarian' },
    { value: 'Vegan', label: 'Vegan' },
    { value: 'Omnivore', label: 'Omnivore' },
    { value: 'Paleo', label: 'Paleo' },
    { value: 'Ketogenic', label: 'Ketogenic' },
    { value: 'Gluten-free', label: 'Gluten-free' },
    { value: 'Dairy-free', label: 'Dairy-free' },
    { value: 'Nut-free', label: 'Nut-free' },
  ];

const DietaryPreference = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleChange = (selectedOption) => {
      setSelectedOptions(selectedOption)
    }
    useEffect(() => {
        options.sort((a, b) => a.label.localeCompare(b.label));
    }, []);

//   console.log("hello",ArrData);
  return (
    <div className="col-4">
            <span >Dietary Preferences</span>
          <Select
              onChange={handleChange}
              options={options}
              value={selectedOptions}
              isMulti={true}
              placeholder="Search here..."
            />
        </div>
  )
}

export default DietaryPreference