import React, { useState, useEffect, useRef } from 'react';

const ImageCarousel = ({ images = [], delay = 3000, height = '400px', width = '100%' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef(null);

    // Function to reset and start the timer
    const startTimer = () => {
        // Clear any existing timer
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        // Start a new timer
        timerRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, delay);
    };

    // Auto-slide effect and timer reset on manual navigation
    useEffect(() => {
        if (!images || images.length === 0) return;

        startTimer();

        // Cleanup timer on unmount or when dependencies change
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [images, delay, currentIndex]); // Add currentIndex as a dependency

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    if (!images || images.length === 0) {
        return <div>No images to display</div>;
    }

    return (
        <div className="relative" style={{ width, height }}>
            <div className="w-full h-full overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: 1 }}
                />
            </div>
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                aria-label="Previous slide"
            >
                ←
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                aria-label="Next slide"
            >
                →
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;