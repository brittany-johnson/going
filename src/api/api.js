import CategorySelection from '../components/CategorySelection';

const Places = {
  urlBody: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=',
  query: `${CategorySelection.value}`,
  location: 'Houston',
};

export default Places;

// https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&key=YOUR_API_KEY
