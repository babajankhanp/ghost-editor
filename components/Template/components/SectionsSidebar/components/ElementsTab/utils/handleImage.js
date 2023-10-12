/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleImage = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
    <tr>
      <td>
      <div>
          <img id=${uniqueId} src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" tabIndex='-1' style='width: 100%;' contenteditable='true' />
      <div>
      </td>
    </tr>
  `;

  templateContainer.innerHTML += staticHtml;

  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleImage;
