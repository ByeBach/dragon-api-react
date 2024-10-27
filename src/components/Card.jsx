import React from 'react';
import styles from './Card.module.css';

const Card = ({ character: { name, race, ki, maxKi, gender, description, affiliation, image } }) => { 

  return(
    <>
    
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <img  src={image} alt={name}  />
      </div>
      <h2>{name}</h2>
      <p><strong>Race:</strong> {race}</p>
      <p><strong>Ki:</strong> {ki}</p>
      <p><strong>Max Ki:</strong> {maxKi}</p>
      <p><strong>Affiliation:</strong> {affiliation}</p>
    </div>
    </>
  )
}
export default Card;
