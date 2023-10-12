/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';

import {
  colors
} from '@/constants';

import {
  ElementsTab,
  WidgetsTab
} from './components';

const SectionsSidebar = ({
  activeTab,
  handleTabClick
}) => (
  <SidebarWrapper>
    <TabsWrapper>
      <TabItem
        className={activeTab === 'Elements' ? 'active' : ''}
        onClick={() => handleTabClick('Elements')}
      >
        Elements
      </TabItem>
      <TabItem
        className={activeTab === 'Widgets' ? 'active' : ''}
        onClick={() => handleTabClick('Widgets')}
      >
        Widgets
      </TabItem>
    </TabsWrapper>
    {activeTab === 'Elements' ? <ElementsTab /> : <WidgetsTab />}
  </SidebarWrapper>
);

const SidebarWrapper = styled.div`
  width: 350px;
  height: 100vh;
  width: 400px;
  padding: 20px;
  top: 0;
  right: 0;
  position: sticky;
  overflow: scroll;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TabsWrapper = styled.div`
  display: flex;
`;

const TabItem = styled.button`
  flex: 1;
  border: 1px solid ${colors.primary};
  padding: 10px 30px;
  font-size: 16px;
  background-color: #fff;
  cursor: pointer;

  &.active, &:hover {
    background-color: ${colors.primary};
    color: #fff;
  }
`;

export default SectionsSidebar;
