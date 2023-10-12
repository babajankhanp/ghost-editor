/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useContext
} from 'react';
import styled from 'styled-components';

import {
  updateTemplate,
  copyHTMLToClipboard
} from '@/helpers';
import {
  TemplateContext
} from '@/components/Template/Template.container';

import {
  settingTitle,
  settingWrapper
} from './styledElements';
import {
  colors
} from '@/constants';

const allowedTags = ['H2', 'P', 'IMG', 'DIV', 'TABLE', 'BUTTON', 'SECTION', 'MAIN', 'ARTICLE', 'FOOTER'];

const HandleArrangement = () => {
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);

  const findParentRow = (element) => {
    while (element && element.tagName !== 'TR') {
      element = element.parentElement;
    }
    return element;
  };

  const deleteElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      const parentRow = findParentRow(targetElement);
      if (parentRow) {
        parentRow.remove();
      }
    }

    updateTemplate(templatePayload, setTemplatePayload);
  };

  const moveRowUp = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const parentRow = findParentRow(targetElement);
      if (parentRow && parentRow.previousElementSibling) {
        parentRow.parentNode.insertBefore(parentRow, parentRow.previousElementSibling);
      }
    }

    updateTemplate(templatePayload, setTemplatePayload);
  };

  const moveRowDown = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const parentRow = findParentRow(targetElement);
      if (parentRow && parentRow.nextElementSibling) {
        parentRow.parentNode.insertBefore(parentRow.nextElementSibling, parentRow);
      }
    }

    updateTemplate(templatePayload, setTemplatePayload);
  };

  return (
    <SettingWrapper className={allowedTags.includes(templatePayload.tagName) && 'd-block'}>
      <SettingTitle>
        Element Controls
      </SettingTitle>
      <SettingOptions id="textAlign">
        <OptionItem onClick={() => moveRowUp(templatePayload.activeElement)}>
          <i className="fas fa-angle-double-up" />
        </OptionItem>
        <OptionItem onClick={() => moveRowDown(templatePayload.activeElement)}>
          <i className="fas fa-angle-double-down" />
        </OptionItem>
        <OptionItem onClick={() => deleteElement(templatePayload.activeElement)}>
          <i className="fas fa-trash-alt" />
        </OptionItem>
        {/* <OptionItem onClick={copyHTMLToClipboard}>
          <i className="fas fa-copy" />
        </OptionItem> */}
      </SettingOptions>
    </SettingWrapper>
  );
};

const SettingWrapper = styled(settingWrapper)``;

const SettingTitle = styled(settingTitle)``;

const SettingOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const OptionItem = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 3px;
  cursor: pointer;

  &:last-child {
    margin-left: auto;
  }

  i {
    font-size: 18px;
    color: ${colors.primary};

    &.fa-trash-alt {
      color: red;
    }
  }
`;

export default HandleArrangement;
