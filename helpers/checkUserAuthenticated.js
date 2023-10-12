/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

const checkUserAuthenticated = () => {
  const wealthyEmail = localStorage.getItem('wealthy_email');
  if (!wealthyEmail) {
    window.location.href = '/login';
  }
};

export default checkUserAuthenticated;
