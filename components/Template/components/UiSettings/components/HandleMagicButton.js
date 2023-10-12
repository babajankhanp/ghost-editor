/**
Author - Babajan
Git - https://github.com/babajanpatan
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

const allowedTags = ['BUTTON'];

const HandleMagicButton = () => {
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);
  const [fontFamilies, setFontFamilies] = useState([]);

  const getFonts = async () => {
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
    getFonts();
  }, []);

  const handleAlignment = (textAlign) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const tdParent = Element.parentElement;
    if (tdParent) {
      tdParent.style.textAlign = textAlign;
    }
  };

  const handleWidth = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    if (Element) {
      Element.style.width = `${e.target.value}px`;
    }
  };

  const handleHeight = (e) => {
    const imgElement = document.getElementById(templatePayload.activeElement);
    if (imgElement) {
      imgElement.style.height = `${e.target.value}px`;
    }
  };

  const handleText = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const anchorElement = Element?.querySelector('a');
    if (anchorElement) {
      anchorElement.textContent = e.target.value;
    }
  };

  const handleLink = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const anchorElement = Element?.querySelector('a');
    if (anchorElement) {
      anchorElement.setAttribute('href', e.target.value);
      anchorElement.setAttribute('target', '_blank');
    }
  };

  const handleTextColor = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const anchorElement = Element?.querySelector('a');
    if (anchorElement) {
      anchorElement.style.color = e.target.value;
    }

    updateTemplate(templatePayload, setTemplatePayload);
  };

  const handleBackgroundColor = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const anchorElement = Element?.querySelector('a');
    if (Element) {
      Element.style.backgroundColor = e.target.value;
    }
    if (anchorElement) {
      anchorElement.style.backgroundColor = e.target.value;
    }
    updateTemplate(templatePayload, setTemplatePayload);
  };

  const handleFontSize = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const anchorElement = Element?.querySelector('a');
    if (anchorElement) {
      anchorElement.style.fontSize = `${e.target.value}px`;
    }
    updateTemplate(templatePayload, setTemplatePayload);
  };

  const handleFontWeight = (e) => {
    const Element = document.getElementById(templatePayload.activeElement);
    const anchorElement = Element?.querySelector('a');
    if (anchorElement) {
      anchorElement.style.fontWeight = e.target.value;
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
        Button Link
      </SettingTitle>
      <SettingOptions>
        <OptionItem>
          <i className="fas fa-link" />
          <input
            type="text"
            id="buttonLink"
            onChange={handleLink}
            placeholder="Button Link"
          />
        </OptionItem>
      </SettingOptions>
      <SettingTitle>
        Button Text
      </SettingTitle>
      <SettingOptions>
        <OptionItem>
          <i className="fas fa-font" />
          <input
            type="text"
            id="buttonText"
            onChange={handleText}
            placeholder="Button Text"
          />
        </OptionItem>
      </SettingOptions>
      <SettingTitle>
        Width
      </SettingTitle>
      <SettingOptions>
        <OptionItem>
          <i className="fas fa-arrows-alt-h" />
          <input
            type="number"
            id="buttonWidth"
            onKeyUp={handleWidth}
            placeholder="Button Width (e.g., 100)"
          />
        </OptionItem>
      </SettingOptions>
      <SettingTitle>
        Height
      </SettingTitle>
      <SettingOptions>
        <OptionItem>
          <i className="fas fa-arrows-alt-v" />
          <input
            type="number"
            id="buttonWidth"
            onKeyUp={handleHeight}
            placeholder="Button Height (e.g., 40)"
          />
        </OptionItem>
      </SettingOptions>
      <SettingTitle>
        Button Position
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
      {/* <SettingOptions>
        <OptionItem>
          <input id="color" type="color" onChange={handleTextColor} />
          <span>Color</span>
        </OptionItem>
        <OptionItem>
          <input id="backgroundColor" type="color" onChange={handleBackgroundColor} />
          <span>Background</span>
        </OptionItem>
      </SettingOptions> */}
      {/* <SettingTitle>
        Text Styles
      </SettingTitle>
      <SettingOptions>
        <OptionItem>
          <input id="fontSize" type="number" onKeyUp={handleFontSize} placeholder="Font Size" />
        </OptionItem>
        <OptionItem>
          <select id="fontFamily" onChange={handleFontFamily}>
            {
              fontFamilies.length && fontFamilies.map((font) => (
                <option value={font.family}>{font.family}</option>
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
      </SettingOptions> */}
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

   input[type="color"] {
    height: 30px;
    width: 30px;
    padding: 0;
    margin-right: 10px;
  }
`;

const OptionItemAlignment = styled(OptionItem)`
   width: 10%;
   cursor: pointer;
`;

export default HandleMagicButton;
