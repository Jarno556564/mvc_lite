// UsersLogic.js
import React, { useState } from 'react';

export default UsersLogic = () => {
  const [data, setData] = useState([

  {
    "id": 1,
    "name": "Robert Downey Jr.",
    "bornAt": "New York City, NY",
    "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
  },
  {
    "id": 2,
    "name": "Tom Cruise",
    "bornAt": "Syracuse, NY",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  },

  {
    "id": 4,
    "name": "Morris Kushwaha",
    "bornAt": "New Delhi City, IN",
    "photo": "https://androidwave.com/wp-content/uploads/2021/02/android-wave.jpeg"
  }, {
    "id": 5,
    "name": "Scarlett Johansson.",
    "bornAt": "New York City, NY",
    "photo": "https://androidwave.com/wp-content/uploads/2021/01/profile_pic-300x300.jpg"
  },
  {
    "id": 7,
    "name": "Will Smith",
    "bornAt": "New York City, NY",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQqg3yvv1Kv3KA2XtPu4T1p4z3j6Ubk-XRzoT5FUJIdkh4RWX6JfMM7Jc&s=0"
  },
  {
    "id": 8,
    "name": "Leonardo DiCaprio",
    "bornAt": "New York City, NY",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZRJI2Hr7MTGsc33GZVm_f0ZLyZiCvHhQk8ojXZxt84pmdzZnHnt5kdld&s=0"
  },
  {
    "id": 6,
    "name": "Robert Downey Jr.",
    "bornAt": "New York City, NY",
    "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
  },
  {
    "id": 3,
    "name": "Tom Cruise",
    "bornAt": "Syracuse, NY",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  },]);

  createUser = () => {
    return ['create', 'User'];
  };

  readUser = (id) => {
    const foundObject = data.find(obj => obj.id === id);
    // console.log(foundObject);
    return ['read', 'User id = ', id];
  };

  updateUser = (id) => {
    return ['update', 'User id = ', id];
  };

  deleteUser = (id) => {
    return ['delete', 'User id = ', id];
  };

  listUsers = () => {
    // console.log('model', data);
    return data;
  };

  return {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    listUsers,
  };
};
