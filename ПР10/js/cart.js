function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        var userInput = parseInt(prompt('������� �����:'));
        
        if (!isNaN(userInput)) {
            this.value += userInput;
        } else {
            alert('�� ����� ������������ �����.');
        }
    };
}

var accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 

alert(`���������� ��������: ${accumulator.value}`);