/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleStaticTable = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
                      <tr>
                         <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                           <div>
                              <section id="${uniqueId}" class="json-table" tabIndex='-1'contenteditable='true' style="background-color: #F2EDFF; min-height:30px;" >
                            </section>
                           </div>
                          </td>
                     </tr>
  `;

  templateContainer.innerHTML += staticHtml;

  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleStaticTable;
