/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleShareButton = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');

  const uniqueId = generateId();

  const staticHtml = `
    <tr>
      <td>
             <div>
              <article id=${uniqueId} tabIndex='-1'  contenteditable='true'>
  <a
    data-id="twitter"
    href="https://twitter.com/intent/tweet?url=https://www.wealthy.in/newsletter/money-order/monetary-policy-RBI-to-continue-draining-surplus-liquidity-251?utm_source=Twitter&utm_medium=Share&%20%20utm_campaign=New%20Blog%20Post&via=wealthy_india"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img style="margin: 0.5rem;" alt="twitter" src="https://i.wlycdn.com/insights-new-release/articles/twitter.png">
  </a>
  <a
    data-id="whatsapp"
    href="https://api.whatsapp.com/send?text=https://www.wealthy.in/newsletter/money-order/monetary-policy-RBI-to-continue-draining-surplus-liquidity-251?utm_source=WhatsApp&utm_medium=Share&%20%20utm_campaign=New%20Blog%20Post"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img style="margin: 0.5rem;" alt="whatsapp" src="https://i.wlycdn.com/articles/whatsapp-darkgreen-icon.png">
  </a>
  <a
    data-id="linkedin"
    href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.wealthy.in/newsletter/money-order/monetary-policy-RBI-to-continue-draining-surplus-liquidity-251?utm_source=LinkedIn&utm_medium=Share&%20%20utm_campaign=New%20Blog%20Post"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img style="margin: 0.5rem;" alt="linkedin" src="https://i.wlycdn.com/insights-new-release/articles/linkedin.png">
  </a>
  <a
    data-id="facebook"
    href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.wealthy.in%252Fnewsletter%252Fmoney-order%252Fmonetary-policy-RBI-to-continue-draining-surplus-liquidity-251%253Futm_source%253DFacebook%26utm_medium%3DShare%26%2B%2Butm_campaign%3DNew%2BBlog%2BPost&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img style="margin: 0.5rem;" alt="facebook" src="https://i.wlycdn.com/insights-new-release/articles/facebook.png">
  </a>
</article>


              </div>
                  </td>
            </tr>
  `;

  templateContainer.innerHTML += staticHtml;

  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleShareButton;
