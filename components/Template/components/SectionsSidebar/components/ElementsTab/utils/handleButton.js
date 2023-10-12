/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleButton = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
    <tr>
      <td>
        <a href="#" id=${uniqueId} tabIndex='-1' style='display:block; font-size: 16px; color: #000; font-weight: 400; padding-top: 5px; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; text-align: left;' contenteditable='true'>
          Action Link
        </a>
      </td>
    </tr>
  `;

  templateContainer.innerHTML += staticHtml;

  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleButton;
