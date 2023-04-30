function findCarNumb(codeWord, numbersString) {
    let carNumber = "";
    for (let i = 0; i < codeWord.length; i++) {
      const code = codeWord.charCodeAt(i);
      const index = code - 65;
      carNumber += numbersString[index]; // додавання чисел
    }
    return carNumber;
  }
  
  const codeWord = "Kyiv";
  const numbersString =
    "91840723560405732869501597532715380792564152347981576423052155063186297498324950786324";
  console.log(findCarNumb(codeWord, numbersString));
  module.exports = { findCarNumb };