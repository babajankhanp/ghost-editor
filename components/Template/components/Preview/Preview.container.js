/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useState
} from 'react';

import Preview from './Preview';

const PreviewContainer = ({
  togglePreview,
  setTogglePreview
}) => {
  const [activeDevice, setActiveDevice] = useState('desktop');

  const closePreview = () => {
    setTogglePreview(false);
    document.getElementById('CodePreview').innerHTML = '';
  };

  return (
    <Preview
      togglePreview={togglePreview}
      closePreview={closePreview}
      activeDevice={activeDevice}
      setActiveDevice={setActiveDevice}
    />
  );
};

export default PreviewContainer;
