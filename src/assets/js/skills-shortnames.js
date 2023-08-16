import skillsData from '@/assets/json/skillsData.json'

// Get an Array containing multiple arrays: an array for each category with only their data, not their key (category name)
const namesArray = Object.values(skillsData);

// Concatenate the category arrays into one array
const concatArray = [].concat(namesArray[0], namesArray[1], namesArray[2]);

// Extract keys (skills names) and shortnames from each object in the array
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

const skillsShortnames = extractKeysAndShortnames(concatArray);

export default skillsShortnames;