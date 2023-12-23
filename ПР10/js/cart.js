function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        var userInput = parseInt(prompt('Введите число:'));
        
        if (!isNaN(userInput)) {
            this.value += userInput;
        } else {
            alert('Вы ввели некорректное число.');
        }
    };
}

var accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 

alert(`Полученное значение: ${accumulator.value}`);