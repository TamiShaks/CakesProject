
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import RecepiesList from './RecipesData';

// export default function Recepie() {

//   const { id } = useParams(); // מקבל את מזהה המתכון מה-URL

//   const recipe = RecepiesList.find(cake => cake.id === Number(id)); // מוצא את המתכון לפי ID

//   if (!recipe) {
//     return <p style={{ textAlign: 'center', marginTop: '50px' }}>המתכון לא נמצא</p>;
//   }

//   return (
//     <div style={{ maxWidth: '700px', margin: 'auto', padding: '30px' }}>
//       <h1 style={{ textAlign: 'center' }}>{recipe.name}</h1>
//       <img
//         src={recipe.image}
//         alt={recipe.name}
//         style={{
//           width: '100%',
//           maxHeight: '400px',
//           objectFit: 'cover',
//           borderRadius: '12px',
//           marginBottom: '20px',
//         }}
//       />
//       <pre style={{
//         backgroundColor: '#fdf6f0',
//         padding: '20px',
//         borderRadius: '10px',
//         fontFamily: 'inherit',
//         whiteSpace: 'pre-wrap',
//         lineHeight: '1.7'
//       }}>
//         {recipe.theRecepie}
//       </pre>
//     </div>
//   );
// }


import React from 'react';
import { useParams } from 'react-router-dom';
import RecepiesList from './RecipesData';

export default function Recepie() {
  const { id } = useParams();
  const recipe = RecepiesList.find(cake => cake.id === Number(id));

  if (!recipe) {
    return (
      <p
        style={{
          textAlign: 'center',
          marginTop: '80px',
          fontSize: '1.2rem',
          color: '#a05252',
          fontFamily: "'Varela Round', sans-serif",
        }}
      >
        המתכון לא נמצא
      </p>
    );
  }

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#fff4f1',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Varela Round', sans-serif",
        color: '#5b3a2f',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '25px', fontSize: '2rem' }}>
        {recipe.name}
      </h1>

      <img
  src={recipe.image}
  alt={recipe.name}
  style={{
    width: '100%',
    maxWidth: '500px',        // מגביל את הרוחב בפועל
    height: 'auto',
    display: 'block',
    margin: '0 auto 25px',    // מרכז את התמונה ומוסיף רווח תחתון
    objectFit: 'cover',
    borderRadius: '12px',
    border: '3px solid #ffd1c1',
  }}
/>

      <pre
        style={{
          backgroundColor: '#ffeae2',
          padding: '25px',
          borderRadius: '12px',
          fontSize: '1.05rem',
          whiteSpace: 'pre-wrap',
          lineHeight: '1.8',
          border: '1px solid #f5b8a6',
          fontFamily: "'Varela Round', sans-serif", // הוספת הגופן כאן
        }}
      >
        {recipe.theRecepie}
      </pre>
    </div>
  );
}
