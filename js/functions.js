const checkStringLength = function (string,lengthMax) {
  return string.length <= lengthMax;
};
 console.log(checkStringLength ('кекс любит кексы',20));
 console.log(checkStringLength ('имплементация', 18));
 console.log(checkStringLength ('сложность и простота функций', 10));


const isPalindrom = function (rawString) {
  const string = rawString.replaceAll(' ', '').toUpperCase();
  for (let i = 0; i < string.length / 2; i++){
    console.log(i, string.at(i),string.at(-i - 1));
    if (string.at(i) !== string.at(-i - 1)){
      return false;
    }
  }
  return true;
};
isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');

const extractNumbers = function(string){
  let result = '';
  for (let i = 0; i < string.length; i++){
    if (!isNaN(parseInt(string[i], 10))){
      result += string[i];
    }
  }
  return Number(result) || NaN;
};
console.log(extractNumbers('2023 год'));
console.log(extractNumbers('ECMAScript 2022'));
console.log(extractNumbers('1 кефир, 0.5 батона'));
console.log(extractNumbers('агент 007'));
console.log(extractNumbers('а я томат'));
