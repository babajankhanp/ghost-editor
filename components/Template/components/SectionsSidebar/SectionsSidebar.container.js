/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useState
} from 'react';

import SectionsSidebar from './SectionsSidebar';

const SectionsSidebarContainer = () => {
  const [activeTab, setActiveTab] = useState('Elements');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <SectionsSidebar
      activeTab={activeTab}
      handleTabClick={handleTabClick}
    />
  );
};

export default SectionsSidebarContainer;
