export const capitalizeFirstLetter = (string) => {
  let str = string.slice(1);
  return string.charAt(0).toUpperCase() + str.replace(/[^a-zA-Z0-9 ]/g, ' ');;
};
