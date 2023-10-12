/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

function convertRgb(r, g, b) {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

const rgbToHex = (rgbVal) => {
  const rgbColor = rgbVal;
  const matches = rgbColor?.match(/\d+/g);

  if (matches) {
    const r = parseInt(matches[0]);
    const g = parseInt(matches[1]);
    const b = parseInt(matches[2]);

    const hexColor = convertRgb(r, g, b);
    return hexColor;
  }
};

export default rgbToHex;
