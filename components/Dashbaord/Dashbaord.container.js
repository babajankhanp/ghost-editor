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
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser();
  const { isLoaded, userId, sessionId, getToken } = useAuth();


  const fetchData = async () => {
    try {
      setIsLoading(true)
      const fetchApi = await fetch('/api/template/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const res = await fetchApi.json();
      setTemplates(res?.data);
      setIsLoading(false)
      console.log(res, '<-- res');
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  const handleCreateTemplate = async () => {
    try {
      setIsCreating(true);
      const fetchApi = await fetch('/api/template/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({author_email:user?.firstName})
      });
      const res = await fetchApi.json();
      setIsCreating(false);
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
     setIsLoading(true)
    const fetchApi = await fetch('/api/template/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: templateId })
    });

    const res = await fetchApi.json();
    setIsLoading(false)
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
     setIsLoading(false)
  }
};

//   const handleAuth = () => {
//     console.log("hellooooooooooooo")
//      if (!isLoaded || !userId) {
//       window.location.href = '/';
//   }
//   }

// (function handleAuth() {
//   // some initiation code
//   if (userId){
//    localStorage.setItem("AuthId", userId);
//   }
// })();


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Dashbaord
      handleCreateTemplate={handleCreateTemplate}
      handleDeleteTemplate={handleDeleteTemplate}
      templates={templates}
      isCreating={isCreating}
      isLoading={isLoading}
    />
  );
};

export default DashbaordContainer;
