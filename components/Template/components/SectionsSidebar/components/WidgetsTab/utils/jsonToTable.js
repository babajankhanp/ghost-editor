/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleJSONTable = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
                      <tr>
                         <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                            <main id="${uniqueId}" class="json-table" tabIndex='-1'contenteditable='true' style="background-color: #F2EDFF; min-height:30px;" >
                            <div id"table">
                            <table id="default-table" cellpadding="0" cellspacing="0" width="100%" border="0" style="color: rgb(0, 0, 0); font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 22px; table-layout: auto; width: 100%; border: none;"><thead><tr style="border-bottom: 1px solid rgb(236, 237, 238); text-align: left; padding: 15px 0px;"><th style="padding: 15px; border: 5px solid white; background-color: rgb(242, 237, 255);">id</th><th style="padding: 15px; border: 5px solid white; background-color: rgb(242, 237, 255);">name</th><th style="padding: 15px; border: 5px solid white; background-color: rgb(242, 237, 255);">age</th></tr></thead><tbody><tr style="border-bottom: 1px solid rgb(236, 237, 238); text-align: left; padding: 15px 0px;"><td class="json-table-cell" style="background-color: rgb(242, 237, 255); padding: 10px; border: 5px solid white;">1</td><td class="json-table-cell" style="background-color: rgb(242, 237, 255); padding: 10px; border: 5px solid white;">Brijesh</td><td class="json-table-cell" style="background-color: rgb(242, 237, 255); padding: 10px; border: 5px solid white;">1</td></tr><tr style="border-bottom: 1px solid rgb(236, 237, 238); text-align: left; padding: 15px 0px;"><td class="json-table-cell" style="background-color: rgb(242, 237, 255); padding: 10px; border: 5px solid white;">2</td><td class="json-table-cell" style="background-color: rgb(242, 237, 255); padding: 10px; border: 5px solid white;">Babajan</td><td class="json-table-cell" style="background-color: rgb(242, 237, 255); padding: 10px; border: 5px solid white;">1</td></tr><tr style="border-bottom: 1px solid rgb(236, 237, 238); text-align: left; padding: 15px 0px;"><td class="json-table-cell" style="background-color: rgb(242, 237, 255); padding: 10px; border: 5px solid white;">2</td><td class="json-table-cell" style="background-color: rgb(242, 237, 255); padding: 10px; border: 5px solid white;">Sahil</td><td class="json-table-cell" style="background-color: rgb(242, 237, 255); padding: 10px; border: 5px solid white;">1</td></tr></tbody></table>
                            </div>
                          </td>
                     </tr>
  `;

  templateContainer.innerHTML += staticHtml;

  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleJSONTable;
