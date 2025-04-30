// import * as React from 'react';
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

// export default function MyRaiting({ id }) {
//   const storageKey = `rating_${id}`;
//   const savedValue = parseFloat(localStorage.getItem(storageKey)) || 0;

//   const [value, setValue] = React.useState(savedValue);
//   const [hover, setHover] = React.useState(-1);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     localStorage.setItem(storageKey, newValue); // שומר את הדירוג
//   };

//   return (
//     <Box sx={{ width: 200, display: 'flex', alignItems: 'center', margin: 'auto' }}>
//       <Rating
//         name={`hover-feedback-${id}`}
//         value={value}
//         precision={0.5}
//         getLabelText={getLabelText}
//         onChange={handleChange}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//       />
//       {value !== null && (
//         <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//       )}
//     </Box>
//   );
// }





// import  React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import { useEffect,useState } from 'react';

// export default function MyRating({id}) {
//   const [value, setValue] = useState(0);

//   const storageKey = id ? `rating-${id}` : null;

//   // טוען את הדירוג מה-localStorage פעם אחת
//   useEffect(() => {
//     if (!storageKey) return;
//     const saved = localStorage.getItem(storageKey);
//     if (saved !== null && !isNaN(saved)) {
//       setValue(Number(saved));
//     }
//   }, [storageKey]);

//   // שומר את הדירוג בכל שינוי
//   useEffect(() => {
//     if (storageKey) {
//       localStorage.setItem(storageKey, value.toString());
//     }
//   }, [storageKey, value]);


//   return (
//     <Box sx={{ '& > legend': { mt: 2 } }}>
//       <Typography component="legend"></Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
      
//     </Box>
//   );
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: { icon: <SentimentVeryDissatisfiedIcon color="error" />, label: 'Very Dissatisfied' },
  2: { icon: <SentimentDissatisfiedIcon color="error" />, label: 'Dissatisfied' },
  3: { icon: <SentimentSatisfiedIcon color="warning" />, label: 'Neutral' },
  4: { icon: <SentimentSatisfiedAltIcon color="success" />, label: 'Satisfied' },
  5: { icon: <SentimentVerySatisfiedIcon color="success" />, label: 'Very Satisfied' },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RadioGroupRating({ id }) {
  const storageKey = id ? `userRating-${id}` : 'userRating-default';

  const [value, setValue] = React.useState(() => {
    const savedValue = localStorage.getItem(storageKey);
    return savedValue !== null ? Number(savedValue) : 3; // Default to 3 if no value is saved
  });

  React.useEffect(() => {
    localStorage.setItem(storageKey, value);
  }, [value, storageKey]);

  return (
    <StyledRating
      name={`highlight-selected-only-${id}`} // Ensures each rating component has a unique name
      value={value}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
