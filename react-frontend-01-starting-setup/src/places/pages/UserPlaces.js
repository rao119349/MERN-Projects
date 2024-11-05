import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Udaipur Tourism',
    description:
      'Udaipur, the "City of Lakes," stands as a jewel in the crown of Rajasthan, India. Nestled amidst the Aravalli Range, this city captivates visitors with its regal charm, historic grandeur, and scenic landscapes.',
    imageUrl: 'https://www.holidify.com/images/bgImages/UDAIPUR.jpg',
    address: 'Udaipur, Rajasthan  India',
    location: {
      lat: 24.6083703,
      lng: 73.5572129,
    },
    creatorId: 'u1',
  },
  {
    id: 'p2',
    title: 'Hawa Mahal',
    description:
      'The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://www.travel-rajasthan.com/images/experiance-in-rajsthan/forts-and-palaces/hawa-mahal-travel-rajasthan.jpg',
    address:
      'Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002',
    location: {
      lat: 26.9239424,
      lng: 75.8242231,
    },
    creatorId: 'u2',
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
