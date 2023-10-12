/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';
import {
  HandleAlignment,
  HandleArrangement,
  HandleFontFamily,
  HandleFontStyles,
  HandleImageSrc,
  HandleLink,
  HandlePadding,
  HandleMagicButton,
  HandleStaticTable,
  HandleJsonTable,
  HandleShareButton
} from './components';

const UiSettings = () => (
  <SettingsWrapper tabIndex="-1">
    {/* <HandleFontFamily /> */}
    <HandleArrangement />
    <HandleJsonTable />
    <HandleAlignment />
    <HandleFontStyles />
    <HandleImageSrc />
    <HandlePadding />
    <HandleMagicButton />
    <HandleStaticTable />
    <HandleLink />
    <HandleShareButton />
  </SettingsWrapper>
);

const SettingsWrapper = styled.aside`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  top: 0;
  right: 0;
  position: sticky;
`;

export default UiSettings;
