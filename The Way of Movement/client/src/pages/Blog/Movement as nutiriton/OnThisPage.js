import React from 'react';
import { Link } from 'react-router-dom';

export const OnThisPage = () => {
  return (
    <nav>
      <ul className="MovementNutrition-links">
        <li>
        <Link to="/MovementNutrition#section1">
            What is Movement</Link>
        </li>
        <li>
        <Link to="/MovementNutrition#section1">
            What's the difference between a movement practice and exercising or specialising?
          </Link>
        </li>
        <li>
          <Link to="/MovementNutrition#section3">
            How to begin crafting a movement practice?
          </Link>
        </li>
      </ul>
    </nav>
  );
};
