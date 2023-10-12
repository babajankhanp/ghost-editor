/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useContext
} from 'react';

import {
  TemplateContext
} from '@/components/Template/Template.container';
import {
  handleButton,
  handleHeading,
  handleHorizontalRule,
  handleImage,
  handleParagraph
} from './utils';

import ElementsTab from './ElementsTab';

const ElementsTabCotnainer = () => {
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);

  const addElement = (elementType) => {
    switch (elementType) {
      case 'img':
        handleImage(templatePayload, setTemplatePayload);
        break;

      case 'heading':
        handleHeading(templatePayload, setTemplatePayload);
        break;

      case 'hr':
        handleHorizontalRule(templatePayload, setTemplatePayload);
        break;

      case 'button':
        handleButton(templatePayload, setTemplatePayload);
        break;

      default:
        handleParagraph(templatePayload, setTemplatePayload);
        break;
    }
  };

  return (
    <ElementsTab
      addElement={addElement}
    />
  );
};

export default ElementsTabCotnainer;
