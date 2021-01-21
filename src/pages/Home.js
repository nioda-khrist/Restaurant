import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  axios({
    method: 'GET',
    url: 'https://developers.zomato.com/api/v2.1/restaurant?res_id=18929884',
    headers: {
      'user-key': process.env.REACT_APP_API_KEY,
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return <div>Home</div>;
};

export default Home;
