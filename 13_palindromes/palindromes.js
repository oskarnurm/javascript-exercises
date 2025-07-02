const palindromes = function (string) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleaned = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character));

  const reversedString = cleaned.reverse().join("");
  const cleanedString = cleaned.join("");

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
console.log(palindromes("A man, a car"));
