/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';

import {
  colors
} from '@/constants';

const WidgetsTab = ({
  addElement
}) => (
  <ElementsWrapper>
    <ElementItem onClick={() => addElement('footer')}>
      <ElementTitle>Footer</ElementTitle>
      <ElementImage src="https://ik.imagekit.io/vndn6dm18/Screenshot%202023-09-06%20at%208.50.18%20PM.png?updatedAt=1694013691080" />
    </ElementItem>
    <ElementItem onClick={() => addElement('share-buttons')}>
      <ElementTitle>Share Buttons  </ElementTitle>
      <ElementImage src="https://ik.imagekit.io/vndn6dm18/Screenshot%202023-09-07%20at%2011.31.58%20AM.png?updatedAt=1694066538540" />
    </ElementItem>
    <ElementItem onClick={() => addElement('team-signature')}>
      <ElementTitle>Team Signature</ElementTitle>
      <ElementImage src="https://ik.imagekit.io/vndn6dm18/Screenshot%202023-09-06%20at%209.40.15%20PM.png?updatedAt=1694016631508" />
    </ElementItem>
    <ElementItem onClick={() => addElement('magic-button')}>
      <ElementTitle>Magic Button</ElementTitle>
      <ElementImage src="https://ik.imagekit.io/vndn6dm18/Screenshot%202023-09-06%20at%2010.16.04%20PM.png?updatedAt=1694018773974" />
    </ElementItem>
    <ElementItem onClick={() => addElement('json-table')}>
      <ElementTitle>JSON To Table</ElementTitle>
      <ElementImage src="https://ik.imagekit.io/vndn6dm18/Screenshot%202023-09-08%20at%2011.10.31%20AM.png?updatedAt=1694151660260" />
      <ElementParagraph />
    </ElementItem>
    <ElementItem onClick={() => addElement('divider')}>
      <ElementTitle>Divider</ElementTitle>
      <ElementParagraph />
    </ElementItem>
    <ElementItem onClick={() => window.open('https://mermaid.live', '_blank')}>
      <ElementTitle>Diagrams/Flow Charts</ElementTitle>
      <ElementParagraph />
      1. Create Diagram from Mermaid live editor
      {' '}
      <br />
      2. Go To Actions then Click PNG Link
      <br />
      3. Then Use It as Image in Editor
    </ElementItem>
    <ElementItem onClick={() => addElement('paragraph')}>
      <ElementTitle>Paragraph</ElementTitle>
      <ElementParagraph />
      <ElementParagraph />
      <ElementParagraph />
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

export default WidgetsTab;
