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
  handleImage,
  handleFooter,
  handleParagraph,
  handleShareButton,
  handleTeamSignature,
  handleDivider,
  handleMagicButton,
  handleStaticTable,
  handleJSONTable,
  handleDiagrams
} from './utils';

import WidgetsTab from './WidgetsTab';

const WidgetsTabCotnainer = () => {
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);

  const addElement = (elementType) => {
    switch (elementType) {
      case 'img':
        handleImage(templatePayload, setTemplatePayload);
        break;

      case 'footer':
        handleFooter(templatePayload, setTemplatePayload);
        break;
      case 'share-buttons':
        handleShareButton(templatePayload, setTemplatePayload);
        break;
      case 'team-signature':
        handleTeamSignature(templatePayload, setTemplatePayload);
        break;
      case 'divider':
        handleDivider(templatePayload, setTemplatePayload);
        break;
      case 'magic-button':
        handleMagicButton(templatePayload, setTemplatePayload);
        break;
      case 'static-table':
        handleStaticTable(templatePayload, setTemplatePayload);
        break;
      case 'json-table':
        handleJSONTable(templatePayload, setTemplatePayload);
        break;
      case 'diagrams':
        handleDiagrams(templatePayload, setTemplatePayload);
        break;

      default:
        handleParagraph(templatePayload, setTemplatePayload);
        break;
    }
  };

  return (
    <WidgetsTab
      addElement={addElement}
    />
  );
};

export default WidgetsTabCotnainer;
