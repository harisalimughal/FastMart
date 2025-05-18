import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../NavBar';
import ImageCarousel from './ImageCarousel';
import AdDetailsSubSection from './AdDetailsSubSection';
import { LuMapPin } from 'react-icons/lu';

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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdDetails;