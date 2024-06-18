import React, { useState } from 'react';

interface CardSliderProps {
    cards: { title: string; description: string; image: string }[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {cards.map((card, index) => (
                <div key={index} className="flex flex-col items-center bg-customColor_white p-4 shadow-lg rounded-md">
                <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CardSlider;
