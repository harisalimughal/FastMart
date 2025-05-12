import React, { useState } from 'react'

import Navbar from '../NavBar'
import CategorySelect from './CategorySelect'
import ConditionSelect from './ConditionSelect'
import UploadAdImage from './UploadAdImage'
import FormInput from '../atoms/FormInput'
import FormSelect from '../atoms/FormSelect'

function PostAd() {
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [campus, setCampus] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // function to handle category change in CategorySelect component
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  // function to handle condition change in ConditionSelect component
  const handleConditionChange = (selectedCondition) => {
    setCondition(selectedCondition);
  }

  return (
    <div className="flex flex-col gap-10">
      {/* Navbar */}
      <Navbar />

      {/* Main Content - Desktop */}
      <div className="flex flex-col md:gap-5 gap-3">
        {/* Header */}
        <h1 className="w-fit mx-auto md:text-4xl text-2xl font-bold">Post Your Ad</h1>

        {/* Form */}
        <div className="shadow-xl md:w-3/4 w-11/12 mx-auto md:p-10 p-5 rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col md:gap-10 gap-6">
            {/* Category */}
            <div className="flex flex-col gap-4">
              <label className="md:text-2xl text-lg font-bold">Category</label>
              <CategorySelect onCategoryChange={handleCategoryChange} />
            </div>

            {/* Upload Images */}
            <div className="flex flex-col gap-4">
              <label className="md:text-2xl text-lg font-bold">Upload Images</label>
              <div className="flex gap-10">
                <UploadAdImage />
                <UploadAdImage />
                <UploadAdImage />
              </div>
            </div>

            {/* Condition */}
            <div className="flex flex-col gap-4">
              <label className="md:text-2xl text-lg font-bold">Condition</label>
              <ConditionSelect onConditionChange={handleConditionChange} />
            </div>

            {/* Title */}
            <FormInput
              label="Ad Title"
              type="text"
              placeholder="Describe your items in a few words (e.g. brand, model, type, age) ..."
              value={title}
              onInput={(e) => setTitle(e.target.value)}
            />

            {/* Description */}
            <FormInput
              label="Ad Description"
              type="textarea"
              rows={5}
              placeholder="Describe your items in detail ..."
              value={description}
              onInput={(e) => setDescription(e.target.value)}
            />

            <div className='md:flex md:flex-row flex flex-col md:gap-8 gap-6 md:justify-evenly'>

              {/* Price */}
              <FormInput
                label="Price"
                type="text"
                placeholder="Enter your price ..."
                value={price}
                onInput={(e) => setPrice(e.target.value)}
                currency="Rs."
              />

              {/* Campus Location */}
              <FormSelect
                label="Campus Location"
                options={[
                  { value: 'Islamabad', label: 'Islamabad' },
                  { value: 'Karachi', label: 'Karachi' },
                  { value: 'Lahore', label: 'Lahore' },
                  { value: 'Peshawar', label: 'Peshawar' },
                  { value: 'Chiniot-Faislabad', label: 'Chiniot-Faislabad' },
                  { value: 'Multan', label: 'Multan' },
                ]}
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                placeholder="Select Campus"
              />

              {/* Name */}
              <FormInput
                label="Name"
                type="text"
                placeholder="Enter your name ..."
                value={name}
                onInput={(e) => setName(e.target.value)}
              />

              {/* Contact */}
              <FormInput
                label="Contact"
                type="text"
                placeholder="+92-3001234567"
                value={contact}
                onInput={(e) => setContact(e.target.value)}
              />
            </div>

            {/* Post */}
            <button
              type="submit"
              className="w-full md:w-fit flex justify-center items-center text-white bg-palletePurple font-bold md:text-2xl text-lg py-2 px-10 rounded-lg mx-auto hover:shadow-xl transition duration-300"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostAd