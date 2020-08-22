const getItemsString = function (array) {
  let string = "";
  for (let i = 0; i < array.length; i += 1) {
    string += `${i + 1} - ${array[i]}\n`;
  }
  return string;
};
console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
