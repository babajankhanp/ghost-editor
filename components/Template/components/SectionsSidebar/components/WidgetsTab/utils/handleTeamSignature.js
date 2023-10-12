/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleTeamSignature = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
    <tr>
      <td>
        <div>
        <img id=${uniqueId} src="https://i.wlycdn.com/mobile-app/wealthy-client-logo.png"png" tabIndex='-1' style='width: 20%;' contenteditable='true' />
        </div>
      </td>
    </tr>
  `;

  templateContainer.innerHTML += staticHtml;

  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleTeamSignature;
