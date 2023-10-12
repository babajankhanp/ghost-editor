/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useContext
} from 'react';
import styled from 'styled-components';

import {
  TemplateContext
} from '@/components/Template/Template.container';
import {
  updateTemplate
} from '@/helpers';

import {
  settingTitle,
  settingWrapper
} from './styledElements';
import {
  colors
} from '@/constants';

const allowedTags = ['H2', 'P', 'DIV', 'ARTICLE'];

const HandleAlignment = () => {
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);
  const handleAlignment = (position) => {
    document.getElementById(templatePayload.activeElement).style.textAlign = position;
    updateTemplate(templatePayload, setTemplatePayload);
    document.getElementById('textAlign').classList.remove('left', 'center', 'right');
    document.getElementById('textAlign').classList.add(document.getElementById(templatePayload.activeElement).style.textAlign);
  };

  return (
    <SettingWrapper className={allowedTags.includes(templatePayload.tagName) && 'd-block'}>
      <SettingTitle>
        Align
      </SettingTitle>
      <SettingOptions id="textAlign">
        <OptionItem onClick={() => handleAlignment('left')}>
          <i className="fas fa-align-left" />
        </OptionItem>
        <OptionItem onClick={() => handleAlignment('center')}>
          <i className="fas fa-align-center" />
        </OptionItem>
        <OptionItem onClick={() => handleAlignment('right')}>
          <i className="fas fa-align-right" />
        </OptionItem>
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

  &.left button:nth-child(1) {
    background-color: ${colors.primary};
    color: #fff;
  }
  &.center button:nth-child(2) {
    background-color: ${colors.primary};
    color: #fff;
  }
  &.right button:nth-child(3) {
    background-color: ${colors.primary};
    color: #fff;
  }
`;

const OptionItem = styled.button`
  height: 25px;
  width: 25px;
  border-radius: 3px;
  cursor: pointer;

  i {
    font-size: 14px;
  }
`;

export default HandleAlignment;
