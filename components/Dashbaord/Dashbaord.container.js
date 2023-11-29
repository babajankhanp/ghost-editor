/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useEffect, useState
} from 'react';
import {toast} from "react-toastify";
import { useUser } from "@clerk/clerk-react";
import { useAuth } from "@clerk/nextjs";


import {
  checkUserAuthenticated,
} from '@/helpers';

import Dashbaord from './Dashbaord';

const DashbaordContainer = () => {
  const [templates, setTemplates] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const { user } = useUser();
  const { isLoaded, userId, sessionId, getToken } = useAuth();


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
        body: JSON.stringify({author_email:user?.firstName})
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


  const handleDeleteTemplate = async (templateId) => {
  try {
    const fetchApi = await fetch('/api/template/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: templateId })
    });

    const res = await fetchApi.json();
    console.log(res, '<-- delete response');

    if (res.success!=false) {
      console.log('Template deleted successfully');
      fetchData();
      toast.success(res.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    } else {
      console.error('Failed to delete template:', res.message);
    }
  } catch (error) {
    console.error('Error deleting template:', error);
  }
};

  const checkUserAuthenticated = () => {
    console.log("hellooooooooooooo")
     if (!isLoaded || !userId) {
      window.location.href = '/';
  }
  }
console.log("userId", userId)

console.log("template",templates?.id)
  useEffect(() => {
    // checkUserAuthenticated();
    fetchData();
  }, []);

  return (
    <Dashbaord
      handleCreateTemplate={handleCreateTemplate}
      handleDeleteTemplate={handleDeleteTemplate}
      templates={templates}
      isCreating={isCreating}
    />
  );
};

export default DashbaordContainer;
