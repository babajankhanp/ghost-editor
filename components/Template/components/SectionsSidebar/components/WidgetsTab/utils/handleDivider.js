/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleMagicDivider = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
    <tr>
      <td>
        <div>
           <img id=${uniqueId} src="https://i.wlycdn.com/newsletter/border-red-blue.png
             "tabIndex='-1' style='width: 100%;' contenteditable='true' />
        </div>
      </td>
    </tr>
  `;

  templateContainer.innerHTML += staticHtml;

  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleMagicDivider;
