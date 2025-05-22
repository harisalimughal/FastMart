import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../NavBar';
import ImageCarousel from './ImageCarousel';
import AdDetailsSubSection from './AdDetailsSubSection';
import { LuMapPin, LuShare2 } from 'react-icons/lu';
import { FaRegHeart } from "react-icons/fa6";

function AdDetails() {
    const { id } = useParams();
    const [adImages, setAdImages] = useState([
        'https://placehold.co/600x400/EEE/31343C',
        'https://placehold.co/800x400/EEE/31343C',
        'https://placehold.co/100x400/EEE/31343C',
    ]); // Corrected useState syntax
    const [listedBy, setListedBy] = useState({
        name: 'John Doe',
        phone: '123-456-7890',
    });
    const [location, setLocation] = useState("Islamabad");
    const [condition, setCondition] = useState("Used");
    const [price, setPrice] = useState("100000");
    const [title, setTitle] = useState("Corolla Altis 2023, White Color");
    const [dateListed, setDateListed] = useState("2023-10-01");
    const [description, setDescription] = useState("This is a sample description of the ad. It provides details about the item being sold.");


    return (
        <div className='flex flex-col md:gap-10 gap-4 pb-10 w-full'>
            {/* Navbar */}
            <Navbar />

            {/* Ad Details Section */}
            <div className='flex flex-col px-40'>

                <div className='flex w-full gap-6'>
                    {/* Ad Listing Details */}
                    <div className='grid grid-cols-5 gap-6 w-full'>
                        <div className='col-span-4'>
                            {adImages.length > 0 && (
                                <ImageCarousel images={adImages} />
                            )}
                        </div>

                        <div className='col-span-1 flex flex-col h-full justify-between'>
                            <AdDetailsSubSection
                                heading={"Listed By"}
                                descriptionLine1={listedBy.name}
                                descriptionLine2={listedBy.phone}
                            />

                            <AdDetailsSubSection
                                heading={"Location"}
                                descriptionLine1={location}
                                icon={<LuMapPin />}
                            />

                            <AdDetailsSubSection
                                heading={"Condition"}
                                descriptionLine1={condition}
                            />
                        </div>

                        {/* Ad Price & Title */}
                        <div className='col-span-4 flex flex-col p-4 bg-[#efefef] rounded-lg gap-2'>
                            <div className='flex items-center justify-between'>
                                <p className='text-2xl font-bold'>
                                    Rs. {price}
                                </p>

                                {/* Share and Like Button */}
                                <div className='flex gap-4'>
                                    <button>
                                        <LuShare2 className='text-xl' />
                                    </button>

                                    <button>
                                        <FaRegHeart className='text-xl' />
                                    </button>
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='text-xl'>
                                    {title}
                                </p>

                                <p className='text-gray-500'>
                                    {new Date(dateListed).toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        {/* Ad Description */}
                        <div className='col-span-4 p-4 bg-[#efefef] rounded-lg flex flex-col gap-2'>
                            <h2 className='text-2xl font-bold'>Seller's Description</h2>
                            <p className='text-xl'>{description}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdDetails;