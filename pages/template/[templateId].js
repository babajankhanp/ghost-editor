/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import Head from 'next/head';

import {
  Template
} from '@/components';

const templateData = `<div id="templateBody" style="background-color:#FAFAFE" class="sc-iAfmwU fYgDYz"><div id="templateContentWrapper" style="max-width:650px;margin:0 auto;background-color:#fff" class="sc-eflkNB"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%"><tbody id="templateContainer">
<tr>
  <td>
  <div>
      <img id="UnjERcszCD" src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" tabindex="-1" style="width: 100%;" contenteditable="true">
  <div>
  </div></div></td>
</tr>

<tr>
  <td>
    <h2 id="5RMDswGBjG" tabindex="-1" style="font-size: 22px; color: #000; font-weight: 500; padding-top: 5px; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; text-align: left;" contenteditable="true">Heading title</h2>
  </td>
</tr>
</tbody></table></div></div>`;

const index = ({
  templateId
}) => (
  <>
    <Head>
      <title>Editor</title>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.6/css/all.css" />
    </Head>
    <Template
      templateId={templateId}
      templateData={templateData}
    />
  </>
);

export async function getServerSideProps({query}) {
  const {templateId} = query;

  return {props: {
    templateId
  }};
}

export default index;
