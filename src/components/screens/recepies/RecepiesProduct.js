// // import '../home/Product.css';
// // import React from 'react';
// // import { Link } from "react-router-dom";
// // import MyRaiting from './MyRaiting';

// // export default function RecepiesProduct(props) {
// //     return (
// //         <div
// //         className="card"
// //         style={{
// //           width: '18rem',
// //           margin: '10px',
// //           textAlign: 'center',
// //           backgroundColor: '#ffe5e0', // רקע ורדרד אפרסקי
// //           border: '1px solid #f3cccc',
// //           borderRadius: '12px',
// //           boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
// //         }}
// //       >
      
// //             <Link to={`/EnlargedViewRecepie/${props.id}`}>
// //                 <img
// //                     src={props.image}
// //                     className="card-img-top"
// //                     alt={props.name}
// //                     style={{
// //                         width: '120px',
// //                         height: '120px',
// //                         borderRadius: '50%',
// //                         objectFit: 'cover',
// //                         margin: '20px auto 10px',
// //                         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// //                     }}
// //                     onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'}
// //                     onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
// //                 />
// //             </Link>

// //             <div className="card-body">
// //                 <h5 className="card-title">{props.name}</h5>
// //                 <p className="card-text">{props.description}</p>

// //                 <MyRaiting id={props.id} />

// //             </div>
// //         </div>
// //     );
// // }
// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import MyRaiting from './MyRaiting';
// import Recepie from './Recepie';


// import cakeImage7 from './../../../assets/images/42.jpg';//יומלדת ורודה 42
// import cakeImage2 from './../../../assets/images/33.jpg';//חתונה קומות חלקה בנגיעות רוז
// import cakeImage3 from './../../../assets/images/12.jpg';//חתונה פרחים לבנים 12
// import cakeImage4 from './../../../assets/images/46.jpg';//חתונה 4 קומות 46
// import cakeImage1 from './../../../assets/images/13.jpg';//בר נטיפים בורדו 13
// import cakeImage5 from './../../../assets/images/11.jpg';//בר נטיפים צבעוני פירות 11
// import cakeImage8 from './../../../assets/images/44.jpg';//יומולדת תמי 44
// import cakeImage6 from './../../../assets/images/10.jpg';//בר עם שמנת תותים ונענע 10
// import cakeImage9 from './../../../assets/images/16.jpg';//יומולדת צבעונית 16
// export default function RecepiesProduct(props) {


//     const [RecepiesList, setRecepiesList] = useState([
//         {
//           id: 1,
//           name: "עוגת שכבות שוקולד עשירה",
//           img: cakeImage6,
//           recepie: `
//       מצרכים:
//       - 5 ביצים
//       - כוס סוכר
//       - כוס קמח תופח
//       - 100 גרם שוקולד מריר
//       - חצי כוס שמנת מתוקה
      
//       הוראות הכנה:
//       1. להקציף את הביצים עם הסוכר עד לקצף תפוח ובהיר.
//       2. להמיס את השוקולד עם השמנת ולקרר מעט.
//       3. לקפל את הקמח והשוקולד לתערובת.
//       4. לאפות בתבנית מרופדת ב-180 מעלות כ-30 דקות.
//       5. לקרר, לפרוס ולמלא בקרם שוקולד בין השכבות.
//           `
//         },
//         {
//           id: 2,
//           name: "עוגת גבינה עם פירורי בצק",
//           img: cakeImage5,
//           recepie: `
//       מצרכים:
//       - 500 גרם גבינה לבנה
//       - 3 ביצים
//       - כוס סוכר
//       - כפית תמצית וניל
//       - כוס קמח + 100 גרם חמאה לפירורים
      
//       הוראות הכנה:
//       1. לערבב את כל חומרי הגבינה.
//       2. להכין פירורים מהקמח והחמאה.
//       3. לשפוך את הבלילה לתבנית, לפזר את הפירורים מעל.
//       4. לאפות 45 דקות ב-170 מעלות.
//           `
//         },
//         {
//           id: 3,
//           name: "עוגת דבש קלאסית",
//           img: cakeImage3,
//           recepie: `
//       מצרכים:
//       - 2 ביצים
//       - כוס דבש
//       - חצי כוס סוכר
//       - כוס תה חם
//       - 2 כוסות קמח תופח
//       - כפית קינמון
      
//       הוראות הכנה:
//       1. לערבב את כל החומרים היטב.
//       2. לשפוך לתבנית משומנת.
//       3. לאפות ב-170 מעלות כ-35 דקות.
//           `
//         },
//         {
//           id: 4,
//           name: "עוגת שוקולד עם פירורים קראנצ'יים",
//           img: cakeImage1,
//           recepie: `
//       מצרכים:
//       - 200 גרם שוקולד מריר
//       - 3 ביצים
//       - כוס סוכר
//       - כוס קמח
//       - פירורי שוקולד מעל (קראמבל)
      
//       הוראות הכנה:
//       1. להמיס שוקולד, להוסיף ביצים וסוכר.
//       2. לקפל פנימה את הקמח.
//       3. לשפוך לתבנית ולפזר את הפירורים מעל.
//       4. אפייה: 30-35 דקות על 180 מעלות.
//           `
//         },
//         {
//           id: 5,
//           name: "עוגת גבינה עם שכבת ג'לי",
//           img: cakeImage9,
//           recepie: `
//       מצרכים:
//       - 2 גביעי גבינה לבנה
//       - שמנת מתוקה להקצפה
//       - כוס סוכר
//       - חבילת ג'לטין
//       - שכבת ג'לי בטעם תות/פטל
      
//       הוראות הכנה:
//       1. להקציף את השמנת עם הסוכר ולערבב עם הגבינה.
//       2. להוסיף ג'לטין מומס.
//       3. לקרר 3 שעות ואז להוסיף את שכבת הג'לי.
//           `
//         },
//         {
//           id: 6,
//           name: "עוגת שכבות וניל עם קישוטים",
//           img: cakeImage2,
//           recepie: `
//       מצרכים:
//       - 4 ביצים
//       - כוס סוכר
//       - כוס קמח
//       - תמצית וניל
//       - קרם וניל לקישוט בין שכבות
      
//       הוראות הכנה:
//       1. להקציף ביצים וסוכר, להוסיף וניל.
//       2. לקפל קמח, לאפות בתבנית עגולה.
//       3. לחתוך לשכבות ולמלא בקרם.
//       4. לקשט לפי הטעם.
//           `
//         },
//         {
//           id: 7,
//           name: "עוגת פרג בחושה",
//           img: cakeImage7,
//           recepie: `
//       מצרכים:
//       - כוס קמח תופח
//       - חצי כוס שמן
//       - כוס סוכר
//       - 3 ביצים
//       - חצי כוס פרג טחון
      
//       הוראות הכנה:
//       1. לערבב הכול יחד.
//       2. לשפוך לתבנית משומנת.
//       3. לאפות 35 דקות ב-170 מעלות.
//           `
//         },
//         {
//           id: 8,
//           name: "עוגת וניל טבעתית",
//           img: cakeImage8,
//           recepie: `
//       מצרכים:
//       - 4 ביצים
//       - כוס סוכר
//       - כוס שמן
//       - גביע יוגורט
//       - 2 כוסות קמח תופח
      
//       הוראות הכנה:
//       1. לערבב הכול ולשפוך לתבנית טבעתית.
//       2. לאפות 40 דקות ב-180 מעלות.
//           `
//         },
//         {
//           id: 9,
//           name: "עוגת דבש רכה ואוורירית",
//           img: cakeImage4,
//           recepie: `
//       מצרכים:
//       - 3 ביצים
//       - כוס דבש
//       - חצי כוס שמן
//       - כוס תה חם
//       - 2 כוסות קמח
//       - תבלינים: קינמון, ציפורן
      
//       הוראות הכנה:
//       1. לערבב הכול היטב.
//       2. לשפוך לתבנית.
//       3. לאפות כ-40 דקות על חום 170 מעלות.
//           `
//         }
//       ]);
      
      
//       const selectedRecipe = RecepiesList[props.id - 1];


// console.log("@@@the object$$$$",RecepiesList)
//     return (
//         <div
//             style={{
//                 textAlign: 'center',
//                 backgroundColor: 'transparent',
//                 border: 'none',
//                 boxShadow: 'none',
//                 padding: '10px'
//             }}
//         ><Link to={`/Recepie/${props.id}`}>
//             {/* <Link to="/Recepie" state={{ recipe: RecepiesList[props.id - 1] }}> */}


       
//                 <img
//                     src={props.image}
//                     alt={props.name}
//                     style={{
//                         width: '140px',
//                         height: '140px',
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                         boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//                         transition: 'transform 0.3s ease',
//                     }}
//                     onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
//                     onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
//                 />
//             </Link>

//             <div style={{ marginTop: '8px' }}>
//                 <MyRaiting id={props.id} />
//             </div>
//         </div>
//     );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import MyRaiting from './MyRaiting';
import RecepiesList from '../data/recipesData'; // נתיב לפי המיקום שלך

export default function RecepiesProduct() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px'
    }}>
      {RecepiesList.map(recipe => (
        <div key={recipe.id} style={{
          textAlign: 'center',
          padding: '10px',
          width: '160px'
        }}>
          <Link to={`/Recepie/${recipe.id}`}>
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </Link>
          <div style={{ marginTop: '8px' }}>
            <MyRaiting id={recipe.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
