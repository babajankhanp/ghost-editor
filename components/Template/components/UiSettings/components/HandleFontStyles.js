/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useState,
  useEffect,
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

const allowedTags = ['H2', 'P', 'BUTTON'];

const HandleFontStyles = () => {
  const [fontFamilies, setFontFamilies] = useState([]);
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);

  const fetchFonts = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCxKW9wA4x58hMAPiCD344nte6wwcQGlNs');
      const fontsList = await response.json();
      setFontFamilies(fontsList.items);
    } catch (error) {
      setFontFamilies([]);
    }
    // console.log(fontsList);
  };

  useEffect(() => {
    fetchFonts();
  }, []);

  const handleFontSize = (e) => {
    document.getElementById(templatePayload.activeElement).style.fontSize = `${e.target.value}px`;
    updateTemplate(templatePayload, setTemplatePayload);
    if (templatePayload.tagName === 'BUTTON') {
      const Element = document.getElementById(templatePayload.activeElement);
      const anchorElement = Element?.querySelector('a');
      if (anchorElement) {
        anchorElement.style.fontSize = `${e.target.value}px`;
      }
    }
  };

  const handleFontWeight = (e) => {
    document.getElementById(templatePayload.activeElement).style.fontWeight = e.target.value;
    if (templatePayload.tagName === 'BUTTON') {
      const Element = document.getElementById(templatePayload.activeElement);
      const anchorElement = Element?.querySelector('a');
      if (anchorElement) {
        anchorElement.style.fontWeight = e.target.value;
      }
    }
    updateTemplate(templatePayload, setTemplatePayload);
  };

  const handleTextColor = (e) => {
    document.getElementById(templatePayload.activeElement).style.color = e.target.value;
    if (templatePayload.tagName === 'BUTTON') {
      const Element = document.getElementById(templatePayload.activeElement);
      const anchorElement = Element?.querySelector('a');
      if (anchorElement) {
        anchorElement.style.color = e.target.value;
      }
    }
    updateTemplate(templatePayload, setTemplatePayload);
  };

  const handleBackgroundColor = (e) => {
    document.getElementById(templatePayload.activeElement).style.backgroundColor = e.target.value;
    if (templatePayload.tagName === 'BUTTON') {
      const Element = document.getElementById(templatePayload.activeElement);
      const anchorElement = Element?.querySelector('a');
      if (Element) {
        Element.style.backgroundColor = e.target.value;
      }
      if (anchorElement) {
        anchorElement.style.backgroundColor = e.target.value;
      }
    }
    updateTemplate(templatePayload, setTemplatePayload);
  };

  const handleFontFamily = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const anchorElement = Element?.querySelector('a');
    if (anchorElement) {
      const selectedFontFamily = e.target.value;
      anchorElement.style.fontFamily = selectedFontFamily;
    }
    updateTemplate(templatePayload, setTemplatePayload);
  };

  return (
    <SettingWrapper className={allowedTags.includes(templatePayload.tagName) && 'd-block'}>
      <SettingTitle>
        Text Styles
      </SettingTitle>
      <SettingOptions>
        <OptionItem>
          <input id="fontSize" type="number" onKeyUp={handleFontSize} placeholder="Font Size" />
        </OptionItem>
        <OptionItem>
          <select id="fontFamily" onChange={handleFontFamily}>
            {
              fontFamilies.length && fontFamilies.map((font, index) => (
                <option key={index} value={font.family}>{font.family}</option>
              ))
            }
          </select>
        </OptionItem>
        <OptionItem>
          <select id="fontWeight" onChange={handleFontWeight}>
            <option value="400">Regular</option>
            <option value="500">Medium</option>
            <option value="600">Bold</option>
          </select>
        </OptionItem>
      </SettingOptions>
      <SettingOptions>
        <OptionItem>
          <input id="color" type="color" onChange={handleTextColor} />
          <span>Color</span>
        </OptionItem>
        <OptionItem>
          <input id="backgroundColor" type="color" onChange={handleBackgroundColor} />
          <span>Background</span>
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

  &:not(:last-child) {
    padding-bottom: 15px;
  }
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  input, select {
    max-width: 100px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid ${colors.tertiary};
  }

  input[type=color] {
    padding: 0;
    width: 30px;
  }

  input {
    width: 45px;
  }

  select {
    width: 100px;
  }
`;

export default HandleFontStyles;
