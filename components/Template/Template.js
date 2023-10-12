/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';
import {
  ActionBar,
  Editor,
  SectionsSidebar,
  UiSettings
} from './components';

const Template = ({
  closePreviewModal,
  openPreviewModal,
  isPreviewModalOpen,
  isPreviewHtml
}) => (
  <MainWrapper>
    <ActionBar />
    <EditorWrapper>
      <SectionsSidebar />
      <Editor />
      <UiSettings />
    </EditorWrapper>
    {isPreviewModalOpen && (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={closePreviewModal}>
          <i style={{marginRight: '30px'}} className="fas fa-times" />
        </CloseButton>
        <ScrollableContent>
          <PreviewContent dangerouslySetInnerHTML={{__html: isPreviewHtml}} />
        </ScrollableContent>
      </ModalContent>
    </ModalBackground>
    )}
  </MainWrapper>
);

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const EditorWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(50, 115, 220, 0.3); // Semi-transparent background
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
`;

const PreviewContent = styled.div`
`;

const ScrollableContent = styled.div`
  max-height: 80vh; /* Adjust as needed */
  overflow-y: auto;
`;

export default Template;
