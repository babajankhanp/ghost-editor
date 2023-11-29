/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */
"use client";

import { useUser } from "@clerk/clerk-react";

import { useAuth } from "@clerk/nextjs";



const checkUserAuthenticated = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  if (!userId) {
    window.location.href = '/';
  }
};

export default checkUserAuthenticated;
