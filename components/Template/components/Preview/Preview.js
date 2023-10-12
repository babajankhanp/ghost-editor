/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';
import {
  appEnv
} from '@/helpers';

const MacMockupImg = `${appEnv.WEALTHY_CDN}/mail-editor/mac-mockup-dark.png`;
const IpadMockupImg = `${appEnv.WEALTHY_CDN}/mail-editor/ipad-pro-mockup.png`;
const IphoneMockupImg = `${appEnv.WEALTHY_CDN}/mail-editor/iphone-15-mockup.png`;

const Preview = ({
  togglePreview,
  activeDevice,
  setActiveDevice,
  closePreview
}) => (
  <PreviewWrapper className={togglePreview && 'toggled'}>
    <PreviewOptionsBar>
      Untitled
      <DevicesList>
        <DeviceItem
          onClick={() => setActiveDevice('desktop')}
          className={activeDevice === 'desktop' && 'active'}
        >
          <i className="fas fa-desktop" />
        </DeviceItem>
        <DeviceItem
          onClick={() => setActiveDevice('tablet')}
          className={activeDevice === 'tablet' && 'active'}
        >
          <i className="fas fa-tablet-alt" />
        </DeviceItem>
        <DeviceItem
          onClick={() => setActiveDevice('mobile')}
          className={activeDevice === 'mobile' && 'active'}
        >
          <i className="fas fa-mobile-alt" />
        </DeviceItem>
      </DevicesList>
      <ClosePreview onClick={closePreview}>
        &times;
      </ClosePreview>
    </PreviewOptionsBar>
    <PreviewSection>
      <PreviewDesktop>
        {
          activeDevice === 'desktop' && (
            <MockupImg
              src={MacMockupImg}
              alt="mac-mockup"
            />
          )
        }
        {
          activeDevice === 'tablet' && (
            <MockupImg
              src={IpadMockupImg}
              alt="ipad-mockup"
            />
          )
        }
        {
          activeDevice === 'mobile' && (
            <MockupImg
              src={IphoneMockupImg}
              alt="iphone-mockup"
            />
          )
        }
        <CodeSection className={activeDevice} id="CodePreview">
          Code Preview
        </CodeSection>
      </PreviewDesktop>
    </PreviewSection>
  </PreviewWrapper>
);

const PreviewWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  transform: translateY(100%);

  &.toggled {
    transform: unset;
  }
`;

const PreviewOptionsBar = styled.div`
  background-color: #3d3d3d;
  padding: 10px 20px;
  color: #fff;
  display: flex;
  align-items: center;
`;

const DevicesList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 15px;
`;

const DeviceItem = styled.button`
  background-color: transparent;
  color: #bfbfbf;
  font-size: 22px;
  padding: 0 5px;

  &.active, &:hover {
    color: #fff;
    cursor: default;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ClosePreview = styled.button`
  color: #bfbfbf;
  background-color: transparent;
  border: 0;
  font-size: 32px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const PreviewSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(white, black 60%, black);
`;

const PreviewDesktop = styled.div`
  width: 1280px;
  height: 720px;
  position: relative;
`;

const MockupImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

const CodeSection = styled.div`
  background-color: #fff;
  position: relative;
  margin: 0 auto;
  overflow: scroll;

  &.desktop {
    height: 625px;
    width: 952px;
    border-radius: 10px 10px 0 0;
    margin-top: 20px;
  }

  &.tablet {
    height: 671px;
    width: 501px;
    border-radius: 11px;
    margin-top: 25px;
  }

  &.mobile {
    height: 691px;
    width: 320px;
    border-radius: 45px;
    margin-top: 15px;
  }
`;

export default Preview;
