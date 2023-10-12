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

const allowedTags = ['H2', 'P', 'IMG'];

const HandleLink = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);

  useEffect(() => {
    const handleMouseUp = () => {
      const selectedText = window.getSelection().toString().trim();

      if (selectedText !== '') {
        const userLink = prompt(`Enter a link for "${selectedText}"`);

        if (userLink !== null) {
          const linkElement = document.createElement('a');
          linkElement.href = userLink;
          linkElement.textContent = selectedText;

          const range = window.getSelection().getRangeAt(0);
          range.deleteContents();
          range.insertNode(linkElement);
        }
      }
    };

    const editableDiv = document.getElementById('templateContainer');
    editableDiv.addEventListener('mouseup', handleMouseUp);

    return () => {
      editableDiv.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleLinkClick = (event) => {
      if (event.target.tagName === 'A') {
        setSelectedLink(event.target);
      }
    };

    const editableContainer = document.getElementById('templateContainer');
    editableContainer.addEventListener('click', handleLinkClick);

    return () => {
      editableContainer.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const removeLink = () => {
    if (selectedLink) {
      selectedLink.removeAttribute('href');
      setSelectedLink(null);
    }
  };

  return (
    <SettingWrapper className={allowedTags.includes(templatePayload.tagName) && 'd-block'}>
      <SettingTitle>
        Manage Link
      </SettingTitle>
      <SettingOptions>
        <OptionItem>

          {/* <input
            type="text"
            placeholder="Enter link URL"
          />
          <button>
            Attach Link
          </button> */}
          {selectedLink && (
          <div>
            <p>
              <i className="fas fa-link" />
              {' '}
              {selectedLink.getAttribute('href')}
            </p>
            <button onClick={removeLink}>Remove Link</button>
          </div>
          )}
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
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  &:not(:last-child) {
    padding-bottom: 15px;
  }
`;

const OptionItem = styled.div`
  width: 100%;

  input {
    padding: 5px;
    border-radius: 4px;
    border: 1px solid ${colors.tertiary};
    margin: 0 10px;
  }

  i {
    color: #9d9d9d;
  }
`;

export default HandleLink;
