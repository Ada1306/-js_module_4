function checkAge(age) {
    return age > 18  || confirm('Батьки дозволили?');
  }

console.log(checkAge(20)); // Виведе: true
console.log(checkAge(15)); // Виведе: результат confirm('Батьки дозволили?')