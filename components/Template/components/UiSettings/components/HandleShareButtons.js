/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useContext,
  useState
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

const allowedTags = ['ARTICLE'];

const HandleShareButton = () => {
  const {templatePayload, setTemplatePayload} = useContext(TemplateContext);
  const [links, setLinks] = useState([
    {
      id: 'twitter',
      href: 'https://twitter.com/intent/tweet?url=https://www.wealthy.in/newsletter/money-order/monetary-policy-RBI-to-continue-draining-surplus-liquidity-251?utm_source=Twitter&utm_medium=Share&%20%20utm_campaign=New%20Blog%20Post&via=wealthy_india',
      imgSrc: 'https://i.wlycdn.com/insights-new-release/articles/twitter.png'
    },
    {
      id: 'whatsapp',
      href: 'https://api.whatsapp.com/send?text=https://www.wealthy.in/newsletter/money-order/monetary-policy-RBI-to-continue-draining-surplus-liquidity-251?utm_source=WhatsApp&utm_medium=Share&%20%20utm_campaign=New%20Blog%20Post',
      imgSrc: 'https://i.wlycdn.com/articles/whatsapp-darkgreen-icon.png'
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/sharing/share-offsite/?url=https://www.wealthy.in/newsletter/money-order/monetary-policy-RBI-to-continue-draining-surplus-liquidity-251?utm_source=LinkedIn&utm_medium=Share&%20%20utm_campaign=New%20Blog%20Post',
      imgSrc: 'https://i.wlycdn.com/insights-new-release/articles/linkedin.png'
    },
    {
      id: 'facebook',
      href: 'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.wealthy.in%252Fnewsletter%252Fmoney-order%252Fmonetary-policy-RBI-to-continue-draining-surplus-liquidity-251%253Futm_source%253DFacebook%26utm_medium%3DShare%26%2B%2Butm_campaign%3DNew%2BBlog%2BPost&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB',
      imgSrc: 'https://i.wlycdn.com/insights-new-release/articles/facebook.png'
    }
  ]);

  const handleHrefChange = (id, newHref) => {
    const updatedLinks = [...links];
    const linkToUpdate = updatedLinks.find((link) => link.id === id);
    if (linkToUpdate) {
      linkToUpdate.href = newHref;
      setLinks(updatedLinks);

      const anchorElement = document.querySelector(`a[data-id="${id}"]`);
      if (anchorElement) {
        anchorElement.setAttribute('href', newHref);
        setTimeout(() => {
          updateTemplate(templatePayload, setTemplatePayload);
        }, 2000);
      }
    }
  };

  const handleImgSrcChange = (id, newImgSrc) => {
    const updatedLinks = [...links];
    const linkToUpdate = updatedLinks.find((link) => link.id === id);
    if (linkToUpdate) {
      linkToUpdate.imgSrc = newImgSrc;
      setLinks(updatedLinks);

      const imgElement = document.querySelector(`a[data-id="${id}"] img`);
      if (imgElement) {
        imgElement.setAttribute('src', newImgSrc);
        setTimeout(() => {
          updateTemplate(templatePayload, setTemplatePayload);
        }, 2000);
      }
    }
  };

  const handleImgWidthChange = (id, newWidth) => {
    const updatedLinks = [...links];
    const linkToUpdate = updatedLinks.find((link) => link.id === id);
    if (linkToUpdate) {
      const imgElement = document.querySelector(`a[data-id="${id}"] img`);
      if (imgElement) {
        imgElement.style.width = `${newWidth}px`;
        setTimeout(() => {
          updateTemplate(templatePayload, setTemplatePayload);
        }, 2000);
      }
    }
  };

  const handleWidth = (e) => {
    const imgElement = document.getElementById(templatePayload.activeElement);
    if (imgElement) {
      imgElement.style.width = `${e.target.value}px`;
      setTimeout(() => {
        updateTemplate(templatePayload, setTemplatePayload);
      }, 2000);
    }
  };

  const handleHeight = (e) => {
    const imgElement = document.getElementById(templatePayload.activeElement);
    if (imgElement) {
      imgElement.style.height = `${e.target.value}px`;
      setTimeout(() => {
        updateTemplate(templatePayload, setTemplatePayload);
      }, 2000);
    }
  };

  return (
    <SettingWrapper className={allowedTags.includes(templatePayload.tagName) && 'd-block'}>
      <SettingTitle>
        Social Share Items Properties
      </SettingTitle>
      {links.map((link) => (
        <Flex key={link.id}>
          <SettingTitleLight>{link.id}</SettingTitleLight>
          <a href={link.href} rel="noopener noreferrer" target="_blank">
            <img
              style={{margin: '0.5rem'}}
              alt={link.id}
              src={link.imgSrc}
            />
          </a>
          <Flex>
            <SettingTitleLightColored>
              <i className="fas fa-link" />
              {' '}
              {link.id}
              {' '}
              Icon/Image Link
            </SettingTitleLightColored>
            <Input
              type="text"
              placeholder="Image Src"
              value={link.imgSrc}
              onChange={(e) => handleImgSrcChange(link.id, e.target.value)}
            />
            <Label>
              {' '}
              {link.id}
              {' '}
              Icon/Image Width:
            </Label>
            <Input
              type="number"
              placeholder="Width :Eg 30 "
              onKeyUp={(e) => handleImgWidthChange(link.id, e.target.value)}
            />
            <SettingTitleLightColored>
              <i className="fas fa-link" />
              {' '}
              {link.id}
              {' '}
              Share Link
            </SettingTitleLightColored>
            <Input
              type="text"
              placeholder="Link"
              value={link.href}
              target="_blank"
              onChange={(e) => handleHrefChange(link.id, e.target.value)}
            />
          </Flex>
          {/* <div>
            <Label>
              {' '}
              {link.id}
              {' '}
              Icon/Image Width:
            </Label>
            <Input
              type="number"
              placeholder="Eg 30 "
              onKeyUp={(e) => handleImgWidthChange(link.id, e.target.value)}
            />
          </div> */}
        </Flex>
      ))}
      <SettingOptions>
        <SettingTitle>
          Share Buttons Container Properties
        </SettingTitle>
        <OptionItem>
          <Label>Width:</Label>
          <input
            type="number"
            placeholder="Eg 100 "
            onKeyUp={handleWidth}
          />
        </OptionItem>
        <OptionItem>
          <Label>Height:</Label>
          <input
            type="number"
            placeholder="Eg 10 "
            onKeyUp={handleHeight}
          />
        </OptionItem>
      </SettingOptions>
    </SettingWrapper>
  );
};

const SettingWrapper = styled(settingWrapper)``;

const SettingTitle = styled(settingTitle)`
    margin-top: 1rem;
`;

const SettingTitleLight = styled(settingTitle)`
   font-weight: lighter;
   margin-top: 1rem;
   font-size: 1.2rem;

`;

const SettingTitleLightColored = styled(settingTitle)`
   font-weight: lighter;
   color: #D65076;
`;

const SettingOptions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
    padding: 5px;
    border-radius: 4px;
    border: 1px solid ${colors.tertiary};
  }
`;

const OptionItemAlignment = styled(OptionItem)`
   width: 10%;
   cursor: pointer;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  height: 1.6rem;
  border: 1px solid ${colors.tertiary};
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
    color: #D65076;
    font-weight: 400;
    margin-right: 10px;
`;

export default HandleShareButton;
