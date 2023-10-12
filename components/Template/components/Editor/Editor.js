/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';

const Editor = () => (
  <TemplateWrapper id="templateWrapper">
    <EditorWrapper id="templateBody" style={{backgroundColor: '#FAFAFE'}}>
      <EditorContainer id="templateContentWrapper" style={{maxWidth: '650px', margin: '0 auto', backgroundColor: '#fff'}}>
        <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" style={{width: '100%'}}>
          <tbody id="templateContainer" />
        </table>
      </EditorContainer>
    </EditorWrapper>
  </TemplateWrapper>
);

const TemplateWrapper = styled.div`
  flex: 1;
`;

const EditorWrapper = styled.div`
  padding: 100px 0;
`;

const EditorContainer = styled.div``;

export default Editor;
