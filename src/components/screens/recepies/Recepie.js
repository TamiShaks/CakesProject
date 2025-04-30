
import React from 'react';
import { useParams } from 'react-router-dom';
import RecepiesList from './RecipesData';

export default function Recepie() {

  const { id } = useParams(); // מקבל את מזהה המתכון מה-URL

  const recipe = RecepiesList.find(cake => cake.id === Number(id)); // מוצא את המתכון לפי ID

  if (!recipe) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>המתכון לא נמצא</p>;
  }

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '30px' }}>
      <h1 style={{ textAlign: 'center' }}>{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '20px',
        }}
      />
      <pre style={{
        backgroundColor: '#fdf6f0',
        padding: '20px',
        borderRadius: '10px',
        fontFamily: 'inherit',
        whiteSpace: 'pre-wrap',
        lineHeight: '1.7'
      }}>
        {recipe.theRecepie}
      </pre>
    </div>
  );
}
