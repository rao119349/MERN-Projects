import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: '9876-8756-8767-0987',
      image:
        'https://www.bleepstatic.com/content/hl-images/2024/10/14/pokemon.jpg',
      name: 'Saurav Yadav',
      places: 3,
    },
    {
      id: '9876-8756-8767-0982',
      image: 'https://www.pokemongoplusplus.com/img/img-2.jpg',
      name: 'Gaurav Yadav',
      places: 30,
    },
    {
      id: '9861-8756-8767-0982',
      image: 'https://img.pokemondb.net/artwork/large/gengar.jpg',
      name: 'Pops',
      places: 12,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
