import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, image, description }) => (
  <div className="border rounded-lg p-4 shadow">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
    <h2 className="mt-2 font-bold">{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;