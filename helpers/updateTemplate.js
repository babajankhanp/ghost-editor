/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

const updateTemplate = (templatePayload, setTemplatePayload) => {
  const templateContainer = document.getElementById('templateContainer');
  templatePayload.data = templateContainer.innerHTML;
  setTemplatePayload(templatePayload);
  templateContainer.innerHTML = templatePayload.data;
  console.log(templatePayload?.activeElement, '<-- id');
  try {
    document.getElementById(templatePayload?.activeElement?.id).focus();
  } catch (err) {
    console.log(err, '<--- err');
  }
};

export default updateTemplate;
