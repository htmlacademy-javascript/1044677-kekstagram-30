const checkStringLength = function (string,lengthMax) {
  return string.length <= lengthMax;
 }
 console.log(checkStringLength ('кекс любит кексы',20));
 console.log(checkStringLength ('имплементация', 18));
 console.log(checkStringLength ('сложность и простота функций', 10));


const isPalindrom = function (rawString) {
  const string = rawString.replaceAll(' ', '').toUpperCase();
  for (let i = 0; i < string.length / 2; i++){
    if (string.at(i) !== string.at(-i - 1)){
      return false;
    }
  }
  return true;
}
isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');
