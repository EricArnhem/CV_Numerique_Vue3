import skillsData from '@/assets/json/skillsData.json'

// Get an Array containing multiple arrays: an array for each category with only their data, not their key (category name)
const namesArray = Object.values(skillsData);

// Concatenate the category arrays into one array (array containing an object for each category)
const concatArray = [].concat(namesArray[0], namesArray[1], namesArray[2]);

/* 
  Extract the skills names and their shortnames into an array
*/
function extractKeysAndShortnames(data) {
  const result = {};

  // Extract key and shortname from each object and add it to the result object ("HTML": "html")
  function extract(obj) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const shortname = obj[key].shortname;
        result[key] = shortname;

        // If an object has a frameworks object it will also extract the key and shortname of the objects within it
        if (obj[key].frameworks) {
          extract(obj[key].frameworks);
        }
      }
    }
  }

  data.forEach(obj => extract(obj));
  return result;
}

export const skillsShortnames = extractKeysAndShortnames(concatArray);


/* 
  Extract the skills names and their colors into an array
*/
function extractKeysAndColors(data) {
  const result = {};

  // Extract key and color from each object and add it to the result object ("HTML": "#e44d26")
  function extract(obj) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const color = obj[key].color;
        result[key] = color;

        // If an object has a frameworks object it will also extract the key and color of the objects within it
        if (obj[key].frameworks) {
          extract(obj[key].frameworks);
        }
      }
    }
  }

  data.forEach(obj => extract(obj));
  return result;
}

export const skillsColors = extractKeysAndColors(concatArray);