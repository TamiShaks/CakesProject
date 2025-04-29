// // import React from 'react';
// // import { useLocation } from 'react-router-dom';

// // export default function Recepie() {
// //   const location = useLocation();
// //   const recipe = location.state?.recipe;

// //   if (!recipe) return <p>לא התקבל מתכון</p>;

// //   const { id, name, image, theRecepie } = recipe;

// //   console.log("#####the object$$$$", theRecepie);

// //   return (
// //     <div>
// //       <h1>{name}</h1>
// //       <img src={image} className="card-img-top cake-image" alt={name} />
// //       <p>{theRecepie}</p>
// //     </div>
// //   );
// // }
// import { useParams } from 'react-router-dom';
// import RecepiesList from './recipesData'; // ייבוא המערך ממקור אחד

// export default function Recepie() {
//   const { id } = useParams();
//   const recipe = RecepiesList.find(r => r.id === Number(id));

//   if (!recipe) return <p>מתכון לא נמצא</p>;

//   return (
//     <div>
//       <h1>{recipe.name}</h1>
//       <img src={recipe.image} alt={recipe.name} />
//       <p>{recipe.theRecepie}</p>
//     </div>
//   );
// }

import React from 'react';
import { useParams } from 'react-router-dom';
import RecepiesList from './RecipesData';

export default function Recepie() {
  const { id } = useParams(); // מקבל את מזהה המתכון מה-URL
  const recipe = RecepiesList.find(r => r.id === Number(id)); // מוצא את המתכון לפי ID

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
