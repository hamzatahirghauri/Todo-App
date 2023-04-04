const tasklist = [];

const userInput = document.getElementById('inputA')

const button = document.querySelector('#buttonA');
const list = document.querySelector('#listA');

const addTask = () => {
    const userInput = document.getElementById('inputA')
    tasklist.push(userInput.value);
    console.log(tasklist)

    
}