import React, { useState } from 'react'

import Navbar from '../NavBar'
import CategorySelect from './CategorySelect'
import ConditionSelect from './ConditionSelect'
import moneyEmoji from '../../assets/others/money-emoji.png'
import UploadAdImage from './UploadAdImage'
import FormInput from '../atoms/FormInput'

function PostAd() {
    const [category, setCategory] = useState('');
    const [condition, setCondition] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [campus, setCampus] = useState('');
    const [name, setName] = useState('');

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

        {/* Money Emoji */}
        <div className="w-28 md:w-48 mx-auto absolute md:right-[9vw] md:top-[12vh] right-0 top-[45vw] -z-10 opacity-50">
          <img src={moneyEmoji} alt="money-emoji"></img>
        </div>

        {/* Main Content - Desktop */}
        <div className="md:flex flex-col gap-5 hidden">
          {/* Header */}
          <h1 className="w-fit mx-auto text-4xl font-bold">Post Your Ad</h1>

          {/* Form */}
          <div className="shadow-xl w-3/4 mx-auto p-10 rounded-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              {/* Category */}
              <div className="flex flex-col gap-4">
                <label className="text-2xl font-bold">Category</label>
                <CategorySelect onCategoryChange={handleCategoryChange} />
              </div>

              {/* Upload Images */}
              <div className="flex flex-col gap-4">
                <label className="text-2xl font-bold">Upload Images</label>
                <div className="flex gap-10">
                  <UploadAdImage />
                  <UploadAdImage />
                  <UploadAdImage />
                </div>
              </div>

              {/* Condition */}
              <div className="flex flex-col gap-4">
                <label className="text-2xl font-bold">Condition</label>
                <ConditionSelect onConditionChange={handleConditionChange} />
              </div>

              {/* Title */}
              <div className="flex flex-col gap-4">
                <label className="text-2xl font-bold">Ad Title</label>
                <input
                  type="text"
                  className="border-2 border-black p-2 rounded-lg text-lg"
                  placeholder="Describe your items in a few words (e.g. brand, model, type, age) ..."
                  onInput={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-4">
                <label className="text-2xl font-bold">Description</label>
                <textarea
                  className="border-2 border-black p-2 rounded-lg text-lg"
                  placeholder="Include condition, features, and reason for selling ..."
                  rows={5}
                  onInput={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>

              {/* Price */}
              <div className="flex flex-col gap-4 text-lg">
                <label className="text-2xl font-bold">Price</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3">Rs.</span>
                  <input
                    type="number"
                    min={0}
                    step={1}
                    className="pl-10 pr-3 py-2 border-2 border-black rounded-lg text-lg"
                    placeholder="Enter your price ..."
                    onInput={(e) => {
                      setPrice(e.target.value);
                    }}
                    value={price}
                  />
                </div>
              </div>

              {/* Campus Location */}
              <div className="flex flex-col gap-4 text-lg">
                <label className="text-2xl font-bold">Campus Location</label>
                <select
                  onChange={(e) => setCampus(e.target.value)}
                  className="py-2 pl-3 pr-20 bg-white w-fit border-2 border-black rounded-lg"
                >
                  <option value="">Select Campus</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Chiniot-Faislabad">Chiniot-Faislabad</option>
                  <option value="Multan">Multan</option>
                </select>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-4 text-lg">
                <label className="text-2xl font-bold">Name</label>
                <input
                  type="text"
                  className="border-2 border-black p-2 pr-10 rounded-lg text-lg w-fit"
                  placeholder="Enter your name ..."
                  onInput={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4 text-lg">
                <label className="text-2xl font-bold">Contact</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3">+92 |</span>
                  <input
                    type="text"
                    className="border-2 border-black py-2 pl-14 rounded-lg text-lg w-fit"
                    placeholder="320-1234567"
                  />
                </div>
              </div>

              {/* Post */}
              <button
                type="submit"
                className="flex justify-center items-center text-white bg-palletePurple font-bold text-2xl py-2 px-10 rounded-lg mx-auto hover:shadow-xl transition duration-300"
              >
                Post
              </button>
            </form>
          </div>
        </div>

        {/* Main Content - Mobile */}
        <div className="flex flex-col gap-5 md:hidden">
          {/* Header */}
          <h1 className="w-fit mx-auto text-2xl font-bold">Post Your Ad</h1>

          {/* Form */}
          <div className="shadow-xl w-11/12 mx-auto p-5 rounded-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              {/* Category */}
              <div className="flex flex-col gap-4">
                <label className="text-lg font-bold">Category</label>
                <CategorySelect onCategoryChange={handleCategoryChange} />
              </div>

              {/* Upload Images */}
              <div className="flex flex-col gap-4">
                <label className="text-lg font-bold">Upload Images</label>
                <div className="flex gap-5">
                  <UploadAdImage />
                  <UploadAdImage />
                  <UploadAdImage />
                </div>
              </div>

              {/* Condition */}
              <div className="flex flex-col gap-4">
                <label className="text-lg font-bold">Condition</label>
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
                label="Description"
                type="textarea"
                placeholder="Include condition, features, and reason for selling ..."
                value={description}
                onInput={(e) => setDescription(e.target.value)}
                rows={5}
              />

              {/* Price */}
              <FormInput
                label="Price"
                type="number"
                min={0}
                step={1}
                currency="Rs."
                placeholder="Enter your price ..."
                value={price}
                onInput={(e) => setPrice(e.target.value)}
              />

              {/* Campus Location */}
              <div className="flex flex-col gap-4">
                <label className="text-lg font-bold">Campus Location</label>
                <select
                  onChange={(e) => setCampus(e.target.value)}
                  className="py-2 pl-3 pr-20 bg-white w-fit border-2 border-black rounded-lg"
                >
                  <option value="">Select Campus</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Chiniot-Faislabad">Chiniot-Faislabad</option>
                  <option value="Multan">Multan</option>
                </select>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-4">
                <label className="text-lg font-bold">Name</label>
                <input
                  type="text"
                  className="border-2 border-black p-2 pr-10 rounded-lg text-md w-fit"
                  placeholder="Enter your name ..."
                  onInput={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4">
                <label className="text-lg font-bold">Contact</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3">+92 |</span>
                  <input
                    type="text"
                    className="border-2 border-black py-2 pl-14 rounded-lg text-md w-fit"
                    placeholder="320-1234567"
                  />
                </div>
              </div>

              {/* Post */}
              <button
                type="submit"
                className="flex justify-center items-center text-white bg-palletePurple font-bold text-lg py-2 px-10 rounded-lg mx-auto hover:shadow-xl transition duration-300"
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