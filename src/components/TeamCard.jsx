import React from 'react';
import './TeamCard.css';
import { FaFacebookF } from 'react-icons/fa';
import { TfiGoogle } from 'react-icons/tfi';
import { TfiTwitterAlt } from 'react-icons/tfi';
import Business from './Business';

const TeamCard = ({ image, name, work, information }) => {
  return (
    <div className='team-card'>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <h4>{work}</h4>
      <p>{information}</p>
      <div className="team-media">
        <FaFacebookF className='team-md' />
        <TfiGoogle className='team-md' />
        <TfiTwitterAlt className='team-md' />
      </div>
    </div>
  );
}

export default TeamCard;
