import React from 'react';
import styles from './Card.module.css';

const Card = ({ character: { name, race, ki, maxKi, gender, description, affiliation, image } }) => { 


  
  return(
    <>
    
    <div className={styles.card}>
      <img src={image} alt={name}  />
      <h2>{name}</h2>
      <p><strong>Race:</strong> {race}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Ki:</strong> {ki}</p>
      <p><strong>Max Ki:</strong> {maxKi}</p>
      <p><strong>Affiliation:</strong> {affiliation}</p>
      <p >{description}</p>
    </div>
    </>
  )
}
export default Card;
