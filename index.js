const sortArray = numbers => {
    for(let i = 0; i < numbers.length - 1; i++){
        for(let k = i + 1; k < numbers.length; k++){
            if(numbers[k] < numbers[i]){
                min = numbers[k];
                numbers[k] = numbers[i];
                numbers[i] = min;
            }
        }
    }
    return numbers;
}