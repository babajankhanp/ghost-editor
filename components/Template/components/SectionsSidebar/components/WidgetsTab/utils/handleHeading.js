/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleHeading = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
    <tr>
      <td>
        <div>
         <h2 id=${uniqueId} tabIndex='-1' style='background-color: #fff; font-size: 22px; color: #000; font-weight: 500; padding-top: 5px; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; text-align: left;' contenteditable='true'>Heading title</h2>
        </div>
      </td>
    </tr>
  `;

  templateContainer.innerHTML += staticHtml;
  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleHeading;
