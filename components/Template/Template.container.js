/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useState,
  useEffect
} from 'react';

import Template from './Template';
import {
  rgbToHex,
  previewHtml,
  checkUserAuthenticated
} from '@/helpers';

const TemplateContext = React.createContext();

const TemplateContainer = ({
  templateId
}) => {
  const [activeElement, setActiveElement] = useState('');
  const [templatePayload, setTemplatePayload] = useState({});
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isPreviewHtml, setIsPreviewHtml] = useState('');
  const [templateName, setTemplateName] = useState('');

  const openPreviewModal = () => {
    previewHtml();
    const localStorageKey = 'previewHTML';
    const retrievedHtml = localStorage.getItem(localStorageKey);

    if (retrievedHtml) {
      setIsPreviewHtml(retrievedHtml);
      setIsPreviewModalOpen(true);
    }
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
    localStorage.clear();
  };

  const stylesToMap = ['fontSize', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'];

  const handleActiveElement = () => {
    const tagName = document.activeElement.id;
    console.log(tagName, 'unique');
    setActiveElement(tagName);
    templatePayload.activeElement = tagName;
    templatePayload.tagName = document.getElementById(tagName)?.tagName;
    setTemplatePayload(templatePayload);
    // map styles
    stylesToMap.map((styleName) => {
      document.getElementById(styleName).value = parseInt(document.getElementById(templatePayload.activeElement)?.style[styleName]);
    });
    if (templatePayload.tagName === 'IMG') {
      stylesToMap.map((styleName) => {
        document.getElementById(styleName).value = parseInt(document.getElementById(templatePayload.activeElement).parentElement?.style[styleName]);
      });
    }
    document.getElementById('fontWeight').value = document.getElementById(templatePayload.activeElement)?.style.fontWeight;
    document.getElementById('color').value = rgbToHex(document.getElementById(templatePayload.activeElement)?.style.color);
    document.getElementById('backgroundColor').value = rgbToHex(document.getElementById(templatePayload.activeElement)?.style.backgroundColor);
    document.getElementById('templateColor').value = rgbToHex(document.getElementById('templateContentWrapper')?.style.backgroundColor);
    document.getElementById('bodyColor').value = rgbToHex(document.getElementById('templateBody')?.style.backgroundColor);
    document.getElementById('templateWidth').value = parseInt(document.getElementById('templateContentWrapper')?.style.maxWidth);

    try {
      document.getElementById('imageSrc').value = document.getElementById(templatePayload.activeElement).src;
      document.getElementById('textAlign').classList.add(document.getElementById(templatePayload.activeElement).style.textAlign);
      // document.getElementById('textAlign').classList?.remove('left', 'center', 'right');
      // document.getElementById('textAlign').classList.add(document.getElementById(templatePayload.activeElement)?.style.textAlign);
    } catch (err) {}
  };

  useEffect(() => {
    checkUserAuthenticated();
  }, []);

  const fetchTemplate = async () => {
    let res;
    try {
      const fetchApi = await fetch('/api/template/fetch-template', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: templateId
        })
      });
      res = await fetchApi.json();
      if (res?.data?.template_data) {
        setTemplateName(res?.data?.name);
        document.getElementById('templateWrapper').innerHTML = res?.data?.template_data;
        document.getElementById('templateContainer').addEventListener('click', handleActiveElement);
      }
      console.log(res, '<-- res dbi');
    } catch (error) {
      console.log(error, '<-- err dbi');
    }
  };

  useEffect(() => {
    fetchTemplate();
    document.getElementById('templateContainer').addEventListener('click', handleActiveElement);
  }, []);

  // useEffect(() => {
  //   document.getElementById('templateContainer').addEventListener('mouseup', (event) => {
  //     const selectedText = window.getSelection().toString().trim();

  //     if (selectedText !== '') {
  //       const userLink = prompt(`Enter a link for "${selectedText}"`);

  //       if (userLink !== null) {
  //         const linkElement = document.createElement('a');
  //         linkElement.href = userLink;
  //         linkElement.textContent = selectedText;

  //         const range = window.getSelection().getRangeAt(0);
  //         range.deleteContents();
  //         range.insertNode(linkElement);
  //       }
  //     }
  //   });
  // }, []);

  return (
    <TemplateContext.Provider value={{
      templateId, templateName, templatePayload, setTemplatePayload, openPreviewModal
    }}
    >
      <Template
        activeElement={activeElement}
        closePreviewModal={closePreviewModal}
        openPreviewModal={openPreviewModal}
        isPreviewModalOpen={isPreviewModalOpen}
        isPreviewHtml={isPreviewHtml}
      />
    </TemplateContext.Provider>
  );
};

export {
  TemplateContainer,
  TemplateContext
};
