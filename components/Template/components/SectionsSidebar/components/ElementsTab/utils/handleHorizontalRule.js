/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleHorizontalRule = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
    <tr>
      <td>
        <div id=${uniqueId} tabIndex='-1' style='font-size: 16px; color: #000; font-weight: 400; padding-top: 20px; padding-bottom: 20px; padding-left: 15px; padding-right: 15px; text-align: left;' contenteditable='true'>
          <hr tabIndex='-1' />
        </div>
      </td>
    </tr>
  `;

  templateContainer.innerHTML += staticHtml;

  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleHorizontalRule;
