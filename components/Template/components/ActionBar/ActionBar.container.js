/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useEffect,
  useState,
  useContext
} from 'react';

import {
  rgbToHex
} from '@/helpers';

import {
  TemplateContext
} from '../../Template.container';

import ActionBar from './ActionBar';

const ActionBarContainer = () => {
  const {openPreviewModal, templateId, templateName} = useContext(TemplateContext);
  const [toggleTemplateBg, setToggleTemplateBg] = useState(false);
  const [toggleBodyBg, setToggleBodyBg] = useState(false);
  const [togglePreview, setTogglePreview] = useState(false);

  const handleTemplateWidth = (e) => {
    document.getElementById('templateContentWrapper').style.maxWidth = `${e.target.value}px`;
  };

  const handleBackground = (sectionId, e) => {
    document.getElementById(sectionId).style.backgroundColor = e.target.value;
  };

  const handleBackgroundImage = (sectionId, imageLink) => {
    document.getElementById(sectionId).style.backgroundImage = `url(${document.getElementById(imageLink).value})`;
    document.getElementById(sectionId).style.backgroundSize = 'cover';
    setToggleBodyBg(false);
    setToggleTemplateBg(false);
  };

  const handlePreview = () => {
    document.getElementById('CodePreview').innerHTML = document.getElementById('templateWrapper').innerHTML;
    setTogglePreview(true);
  };

  const handleSaveTemplate = async () => {
    const templateData = document.getElementById('templateWrapper').innerHTML;
    try {
      const fetchApi = await fetch('/api/template/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: templateId,
          template_data: templateData,
          name: document.getElementById('templateName').innerText
        })
      });
      const res = await fetchApi.json();
      console.log(res, '<-- res');
      alert('Your  Template is Saved');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.getElementById('templateColor').value = rgbToHex(document.getElementById('templateContentWrapper')?.style.backgroundColor);
    document.getElementById('bodyColor').value = rgbToHex(document.getElementById('templateBody')?.style.backgroundColor); document.getElementById('templateWidth').value = parseInt(document.getElementById('templateContentWrapper')?.style.maxWidth);
    document.getElementById('templateWidth').value = parseInt(document.getElementById('templateContentWrapper')?.style.maxWidth);
  }, []);

  return (
    <ActionBar
      handleTemplateWidth={handleTemplateWidth}
      handleBackground={handleBackground}
      handleBackgroundImage={handleBackgroundImage}
      toggleTemplateBg={toggleTemplateBg}
      setToggleTemplateBg={setToggleTemplateBg}
      toggleBodyBg={toggleBodyBg}
      setToggleBodyBg={setToggleBodyBg}
      openPreviewModal={openPreviewModal}
      handlePreview={handlePreview}
      togglePreview={togglePreview}
      setTogglePreview={setTogglePreview}
      handleSaveTemplate={handleSaveTemplate}
      templateName={templateName}
    />
  );
};

export default ActionBarContainer;
