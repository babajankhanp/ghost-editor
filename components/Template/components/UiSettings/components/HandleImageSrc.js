/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useContext,
  useState,
  useEffect
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

const allowedTags = ['IMG'];

const HandleImageSrc = () => {
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);

  const handleImageSrc = (e) => {
    document.getElementById(templatePayload.activeElement).src = e.target.value;
    updateTemplate(templatePayload, setTemplatePayload);
  };

  const handleAlignment = (textAlign) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const tdParent = Element.parentElement;
    if (tdParent) {
      tdParent.style.textAlign = textAlign;
    }
  };

  const handleWidth = (e) => {
    const imgElement = document.getElementById(templatePayload.activeElement);
    if (imgElement) {
      imgElement.style.width = `${e.target.value}px`;
    }
  };

  const handleHeight = (e) => {
    const imgElement = document.getElementById(templatePayload.activeElement);
    if (imgElement) {
      imgElement.style.height = `${e.target.value}px`;
    }
  };

  return (
    <SettingWrapper className={allowedTags.includes(templatePayload.tagName) && 'd-block'}>
      <SettingTitle>
        Image Link
      </SettingTitle>
      <SettingOptions>
        <OptionItem>
          <i className="fas fa-link" />
          <input
            type="text"
            id="imageSrc"
            onKeyUp={handleImageSrc}
            placeholder="Image Link"
          />
        </OptionItem>
      </SettingOptions>
      <SettingTitle>
        Image Position
      </SettingTitle>
      <SettingOptions id="textAlign">
        <OptionItemAlignment onClick={() => handleAlignment('left')}>
          <i className="fas fa-align-left" />
        </OptionItemAlignment>
        <OptionItemAlignment onClick={() => handleAlignment('center')}>
          <i className="fas fa-align-center" />
        </OptionItemAlignment>
        <OptionItemAlignment onClick={() => handleAlignment('right')}>
          <i className="fas fa-align-right" />
        </OptionItemAlignment>
      </SettingOptions>
      <Flex>
        <div>
          <Label>Width:</Label>
          <input
            type="number"
            placeholder="Eg 100 "
            onKeyUp={handleWidth}
          />
        </div>
        <div>
          <Label>Height:</Label>
          <input
            type="number"
            placeholder="Eg 10 "
            onKeyUp={handleHeight}
          />
        </div>
      </Flex>
    </SettingWrapper>
  );
};

const SettingWrapper = styled(settingWrapper)``;

const SettingTitle = styled(settingTitle)``;

const SettingOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  &:not(:last-child) {
    padding-bottom: 15px;
  }
`;

const OptionItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  i {
    margin: 0 10px;
    color: #9d9d9d;
  }

  input {
    width: calc(100% - 10px);
    padding: 5px;
    border-radius: 4px;
    border: 1px solid ${colors.tertiary};
  }
`;

const OptionItemAlignment = styled(OptionItem)`
   width: 10%;
   cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
    color: #1E1730;
    font-weight: 400;
    margin-right: 10px;
`;

export default HandleImageSrc;
