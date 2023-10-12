/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useContext
} from 'react';
import styled from 'styled-components';

import {
  colors
} from '@/constants';

import {
  settingTitle,
  settingWrapper
} from './styledElements';
import {
  TemplateContext
} from '@/components/Template/Template.container';
import {
  updateTemplate
} from '@/helpers';

const allowedTags = ['H2', 'P', 'IMG', 'HR', 'DIV', 'BUTTON', 'MAIN', 'ARTICLE', 'FOOTER'];

const HandlePadding = () => {
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);

  const handlePadding = (paddingType, e) => {
    if (templatePayload.tagName === 'IMG' || templatePayload.tagName === 'BUTTON' || templatePayload.tagName === 'MAIN') {
      document.getElementById(templatePayload.activeElement).parentElement.style[paddingType] = `${e.target.value}px`;
    } else {
      document.getElementById(templatePayload.activeElement).style[paddingType] = `${e.target.value}px`;
    }
    updateTemplate(templatePayload, setTemplatePayload);
  };

  return (
    <SettingWrapper className={allowedTags.includes(templatePayload.tagName) && 'd-block'}>
      <SettingTitle>
        Spacing
      </SettingTitle>
      <SettingOptions>
        <OptionItem>
          <i className="fas fa-caret-up" />
          <br />
          <input id="paddingTop" type="number" onKeyUp={(e) => handlePadding('paddingTop', e)} placeholder="top" />
        </OptionItem>
        <OptionItem>
          <i className="fas fa-caret-left" />
          <input id="paddingLeft" type="number" onKeyUp={(e) => handlePadding('paddingLeft', e)} placeholder="left" />
          <input id="paddingRight" type="number" onKeyUp={(e) => handlePadding('paddingRight', e)} placeholder="right" />
          <i className="fas fa-caret-right" />
        </OptionItem>
        <OptionItem>
          <input id="paddingBottom" type="number" onKeyUp={(e) => handlePadding('paddingBottom', e)} placeholder="bottom" />
          <br />
          <i className="fas fa-caret-down" />
        </OptionItem>
      </SettingOptions>
    </SettingWrapper>
  );
};

const SettingWrapper = styled(settingWrapper)``;

const SettingTitle = styled(settingTitle)`
  /* padding-left: 5px; */
`;

const SettingOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  &:not(:last-child) {
    padding-bottom: 15px;
  }
`;

const OptionItem = styled.div`
  width: 100%;
  text-align: center;

  input {
    width: 40px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid ${colors.tertiary};
    margin: 0 10px;
  }

  i {
    color: #9d9d9d;
  }
`;

export default HandlePadding;
