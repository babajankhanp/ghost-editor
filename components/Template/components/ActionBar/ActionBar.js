/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';

import {
  copyHTMLToClipboard
} from '@/helpers';
import Preview from '../Preview';

const ActionBar = ({
  handleTemplateWidth,
  handleBackground,
  handleBackgroundImage,
  toggleTemplateBg,
  setToggleTemplateBg,
  toggleBodyBg,
  openPreviewModal,
  setToggleBodyBg,
  handlePreview,
  togglePreview,
  setTogglePreview,
  handleSaveTemplate,
  templateName
}) => (
  <div>
    <ActionBarWrapper>
      {
        templateName !== null ?(<TemplateName id="templateName" contentEditable>{templateName}</TemplateName>) : (<TemplateNameInput id="templateName" contentEditable placeholder='Your Template Name'></TemplateNameInput>)
      }
      <TemplateSettings>
        Template
        <input id="templateWidth" placeholder="650" type="number" onKeyUp={(e) => handleTemplateWidth(e)} />
        <input id="templateColor" type="color" onChange={(e) => handleBackground('templateContentWrapper', e)} />
        <ChangeBackgroundWrapper>
          <ImgButton onClick={() => setToggleTemplateBg(!toggleTemplateBg)}>
            <i className="far fa-image" />
          </ImgButton>
          <BackgroundLinkWrapper className={toggleTemplateBg && 'toggled'}>
            <input id="templateBackgroundImageLink" type="text" placeholder="Background Image Link" />
            <AttachBgButton onClick={() => handleBackgroundImage('templateContentWrapper', 'templateBackgroundImageLink')}>
              <i className="far fa-check" />
            </AttachBgButton>
          </BackgroundLinkWrapper>
        </ChangeBackgroundWrapper>
        Body
        <input id="bodyColor" type="color" onChange={(e) => handleBackground('templateBody', e)} />
        <ChangeBackgroundWrapper>
          <ImgButton onClick={() => setToggleBodyBg(!toggleBodyBg)}>
            <i className="far fa-image" />
          </ImgButton>
          <BackgroundLinkWrapper className={toggleBodyBg && 'toggled'}>
            <input id="bodyBackgroundImageLink" type="text" placeholder="Background Image Link" />
            <AttachBgButton onClick={() => handleBackgroundImage('templateBody', 'bodyBackgroundImageLink')}>
              <i className="far fa-check" />
            </AttachBgButton>
          </BackgroundLinkWrapper>
        </ChangeBackgroundWrapper>
      </TemplateSettings>
      <ActionButtons>
        <Button onClick={handlePreview}>
          Preview
        </Button>
        <Button onClick={handleSaveTemplate}>
          Save
        </Button>
        <Button onClick={copyHTMLToClipboard}>
          Get Code
        </Button>
        <Button>
          Publish
        </Button>
      </ActionButtons>
    </ActionBarWrapper>
    <Preview
      togglePreview={togglePreview}
      setTogglePreview={setTogglePreview}
    />
  </div>
);

const ActionBarWrapper = styled.div`
  background-color: #3d3d3d;
  padding: 7px 15px;
  display: flex;
  align-items: center;
  color: #ececec;
`;

const TemplateName = styled.h3`
  color: #ececec;
  font-weight: 400;
  font-size: 15px;
  outline: 0;
  width: fit-content;
  border: 1px solid transparent;
  padding-bottom: 2px;

  &:hover {
    border-bottom: 1px solid #ececec;
  }
`;

const TemplateNameInput = styled.input`
  color: #ececec;
  font-weight: 400;
  font-size: 15px;
  outline: 0;
  width: fit-content;
  border: 1px solid transparent;
  padding-bottom: 2px;

  &:hover {
    border-bottom: 1px solid #ececec;
  }
`

const TemplateSettings = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;

  input[type=number] {
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    padding: 5px 10px;
    width: 50px;
    appearance: none;

    &::placeholder {
      color: #fff;
    }
  }

  input[type=color] {
    padding: 0;
    width: 30px;
    border-radius: 5px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.div`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 20px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
  color: #000;
  background-color: #fff;
  }
`;

const ChangeBackgroundWrapper = styled.div`
  position: relative;
  &:not(:last-child) {
    padding-right: 50px;
  }
`;

const ImgButton = styled.button`
  font-size: 22px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
`;

const BackgroundLinkWrapper = styled.div`
  position: absolute;
  top: calc(100% + 20px);
  left: 0;
  transform: translateY(-100%) translateX(-50%);
  display: flex;
  align-items: center;
  background-color: #fff;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;

  &.toggled {
    transform: translateY(0%) translateX(-50%);
    opacity: 1;
    pointer-events: all;
    z-index: 1;
  }

  input {
    padding: 5px;
    min-width: 250px;
  }
`;

const AttachBgButton = styled.button`
  background-color: #00FF00;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default ActionBar;
