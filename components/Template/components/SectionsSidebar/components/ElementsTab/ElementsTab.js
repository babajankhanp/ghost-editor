/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';

import {
  colors
} from '@/constants';

const ElementsTab = ({
  addElement
}) => (
  <ElementsWrapper>
    <ElementItem onClick={() => addElement('img')}>
      <ElementTitle>Image</ElementTitle>
      <ElementImage src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" />
    </ElementItem>
    <ElementItem onClick={() => addElement('heading')}>
      <ElementTitle>Heading</ElementTitle>
      <ElementHeading />
    </ElementItem>
    <ElementItem onClick={() => addElement('paragraph')}>
      <ElementTitle>Paragraph</ElementTitle>
      <ElementParagraph />
      <ElementParagraph />
      <ElementParagraph />
    </ElementItem>
    <ElementItem onClick={() => addElement('button')}>
      <ElementTitle>Link Button</ElementTitle>
      <ElementButton>Action Link</ElementButton>
    </ElementItem>
    <ElementItem onClick={() => addElement('hr')}>
      <ElementTitle>HR ( Horizontal Rule )</ElementTitle>
      <ElementHR />
    </ElementItem>
  </ElementsWrapper>
);

const ElementsWrapper = styled.div``;

const ElementItem = styled.div`
  border-radius: 6px;
  overflow: hidden;
  box-shadow: ${colors.shadowPrimary};
  border: 1px solid ${colors.borderColor};
  margin-top: 20px;
  cursor: pointer;
`;

const ElementTitle = styled.h3`
  padding: 5px 15px;
  font-weight: 400;
  font-size: 18px;
  color: ${colors.textPrimary};
  background-color: ${colors.borderColor};
`;

const ElementImage = styled.img`
  width: 100%;
  background-color: #f1f1f2;
`;

const ElementHeading = styled.div`
  height: 30px; 
  border-radius: 50px;
  margin: 20px;
  background-color: #f1f1f2;
`;

const ElementParagraph = styled.div`
  height: 20px; 
  border-radius: 50px;
  margin: 15px 20px;
  background-color: #f1f1f2;

  &:last-child {
    width: 60%;
  }
`;

const ElementHR = styled.div`
  height: 2px; 
  border-radius: 50px;
  margin: 15px 20px;
  background-color: #f1f1f2;
`;

const ElementButton = styled.div`
  height: 20px; 
  border-radius: 5px;
  margin: 15px 20px;
  padding: 15px 0;
  background-color: #f1f1f2;
  text-align: center;
`;

export default ElementsTab;
