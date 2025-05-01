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