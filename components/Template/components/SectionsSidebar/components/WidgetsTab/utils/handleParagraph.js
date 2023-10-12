/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleParagraph = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
    <tr>
      <td>
        <div>
         <p id=${uniqueId} tabIndex='-1' style='font-size: 16px; color: #000; font-weight: 400; padding-top: 5px; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; text-align: left;' contenteditable='true'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </div>
      </td>
    </tr>
  `;

  templateContainer.innerHTML += staticHtml;

  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleParagraph;
