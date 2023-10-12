/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleMagicButton = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
                       <tr>
                          <td>
                                <div>
                                <button align="center" id=${uniqueId} class="magic-button" tabIndex='-1'  bgcolor="#6725F4" role="presentation" style=" width:100%; border:none;border-radius:10px; padding: 0 auto; height:60px;mso-padding-alt:10px 25px;background:#6725F4;" valign="middle">
                                 <a
                                 id="myAnchor"
                                 href="https://wealth.onelink.me/v1gb/zqxbxbvq" style="display:inline-block;background:#6725F4;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;font-weight:500;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:10px;" target="_blank"> Check Your Earning </a>
                               </button>
                                </div>
                          </td>
                      </tr>
  `;

  templateContainer.innerHTML += staticHtml;
  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleMagicButton;
