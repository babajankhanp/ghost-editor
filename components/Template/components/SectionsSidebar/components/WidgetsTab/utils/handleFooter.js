/**
Author - Babajan
Git - https://github.com/babajanpatan
* */

import {
  generateId,
  updateTemplate
} from '@/helpers';

const handleFooter = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');
  const uniqueId = generateId();

  const staticHtml = `
                <tr>
                    <td>
                    <footer id=${uniqueId} tabIndex='-1'>
                       <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1C1C1C;background-color:#1C1C1C;width:100%;">
                                    <tbody>
                                        <tr>
                                            <td style="vertical-align:top;padding:0px;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" style="font-size:0px;padding:30px 0 20px 0;word-break:break-word;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="width:200px;">
                                                                                <img height="auto" src="https://i.wlycdn.com/emails/partner-email-footer-logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="200">
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" style="font-size:0px;padding:0px;padding-bottom:8px;word-break:break-word;">
                                                                <div style="font-family:Lato;font-size:12px;line-height:1.5;text-align:center;color:#7E7E7E;"><a style="color: #999;" href="https://www.wealthy.in/insights?utm_source=Email&utm_medium=Email&utm_campaign=Email%20Footer">Insights</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a style="color: #999;" href="https://www.wealthy.in/partner-support?utm_source=Email&utm_medium=Email&utm_campaign=Email%20Footer">Support</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a style="color: #999;" href="https://www.wealthy.in/about-us?utm_source=Email&utm_medium=Email&utm_campaign=Email%20Footer">About Us</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a style="color: #999;" href="https://www.wealthy.in/partners-privacy?utm_source=Email&utm_medium=Email&utm_campaign=Email%20Footer">Privacy</a></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" style="font-size:0px;padding:10px 60px 10px 60px;word-break:break-word;">
                                                                <div style="font-family:Lato;font-size:12px;line-height:1.5;text-align:center;color:#7E7E7E;">Wealthy Broking Pvt. Ltd. PN Plaza, 1090/B, Ground Floor, 18th Cross Rd, 3rd Sector, HSR Layout, Bengaluru, Karnataka 560102</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                        <td>
                                                                                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="vertical-align:top;padding:0px;padding-top:10px;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                                                <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                                    <tr>
                                                                        <td style="padding:0 6px 28px 6px;vertical-align:middle;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:36px;">
                                                                                <tr>
                                                                                    <td style="font-size:0;height:36px;vertical-align:middle;width:36px;">
                                                                                        <a href="https://www.facebook.com/WealthyIN/" target="_blank">
                                                                                            <img height="36" src="https://i.wlycdn.com/emails/partner-email-footer-fb.png" style="border-radius:3px;display:block;" width="36">
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <!--[if mso | IE]></td><td><![endif]-->
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                                    <tr>
                                                                        <td style="padding:0 6px 28px 6px;vertical-align:middle;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:36px;">
                                                                                <tr>
                                                                                    <td style="font-size:0;height:36px;vertical-align:middle;width:36px;">
                                                                                        <a href="https://www.instagram.com/wealthy_in/" target="_blank">
                                                                                            <img height="36" src="https://i.wlycdn.com/emails/partner-email-footer-ig.png" style="border-radius:3px;display:block;" width="36">
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <!--[if mso | IE]></td><td><![endif]-->
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                                    <tr>
                                                                        <td style="padding:0 6px 28px 6px;vertical-align:middle;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:36px;">
                                                                                <tr>
                                                                                    <td style="font-size:0;height:36px;vertical-align:middle;width:36px;">
                                                                                        <a href="https://twitter.com/Wealthy_India" target="_blank">
                                                                                            <img height="36" src="https://i.wlycdn.com/emails/partner-email-footer-tw.png" style="border-radius:3px;display:block;" width="36">
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <!--[if mso | IE]></td><td><![endif]-->
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                                    <tr>
                                                                        <td style="padding:0 6px 28px 6px;vertical-align:middle;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:36px;">
                                                                                <tr>
                                                                                    <td style="font-size:0;height:36px;vertical-align:middle;width:36px;">
                                                                                        <a href="https://www.linkedin.com/company/wealthy-in/" target="_blank">
                                                                                            <img height="36" src="https://i.wlycdn.com/emails/partner-email-footer-li.png" style="border-radius:3px;display:block;" width="36">
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <!--[if mso | IE]></td><td><![endif]-->
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                                    <tr>
                                                                        <td style="padding:0 6px 28px 6px;vertical-align:middle;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:36px;">
                                                                                <tr>
                                                                                    <td style="font-size:0;height:36px;vertical-align:middle;width:36px;">
                                                                                        <a href="https://www.youtube.com/channel/UC9l9bEJdh4amzSVExsGsm3g" target="_blank">
                                                                                            <img height="36" src="https://i.wlycdn.com/emails/partner-email-footer-yt.png" style="border-radius:3px;display:block;" width="36">
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <!--[if mso | IE]></td></tr></table><![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                                                        </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                    </footer>
                    </td>


                </tr>
  `;

  templateContainer.innerHTML += staticHtml;

  updateTemplate(templatePayload, setTemplatePayload);
};

export default handleFooter;
