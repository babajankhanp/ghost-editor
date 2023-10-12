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
  TemplateContext
} from '@/components/Template/Template.container';

import {
  settingTitle,
  settingWrapper
} from './styledElements';

const allowedTags = ['H2', 'P'];

const HandleFontFamily = () => {
  const [fontFamilies, setFontFamilies] = useState();
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);

  const logMovies = async () => {
    const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCxKW9wA4x58hMAPiCD344nte6wwcQGlNs');
    const fontsList = await response.json();
    setFontFamilies(fontsList);
    console.log(fontsList);
  };

  useEffect(() => {
    logMovies();
  }, []);

  return (
    <SettingWrapper className={`d-block ${allowedTags.includes(templatePayload.tagName) && 'd-block'}`}>
      <SettingTitle>
        Fonts
      </SettingTitle>
      <SettingOptions id="textAlign" />
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

export default HandleFontFamily;
