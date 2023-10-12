/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useEffect, useState
} from 'react';

import {
  checkUserAuthenticated
} from '@/helpers';

import Dashbaord from './Dashbaord';

const DashbaordContainer = () => {
  const [templates, setTemplates] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const fetchData = async () => {
    try {
      const fetchApi = await fetch('/api/template/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const res = await fetchApi.json();
      setTemplates(res?.data);
      console.log(res, '<-- res');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateTemplate = async () => {
    setIsCreating(true);
    try {
      const fetchApi = await fetch('/api/template/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({author_email: localStorage.getItem('wealthy_email')})
      });
      const res = await fetchApi.json();
      console.log(res, '<-- res');
      if (res?.data?.insertedId) {
        window.location.href = `/template/${res?.data?.insertedId}`;
      }
    } catch (error) {
      console.log(error);
      setIsCreating(false);
    }
  };

  useEffect(() => {
    checkUserAuthenticated();
    fetchData();
  }, []);

  return (
    <Dashbaord
      handleCreateTemplate={handleCreateTemplate}
      templates={templates}
      isCreating={isCreating}
    />
  );
};

export default DashbaordContainer;
