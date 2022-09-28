/* Part 2 */
console.log('PART 2');
// Starting by declaring "i", as long as it is below 21, log, i++
for (let i = 1; i < 21; i++) {
    console.log(i);
} 

/* Part 3 */
console.log('PART 3');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Creating a for loop that will run the length of the array "numbers"
for (let i = 0; i < numbers.length; i++) {
    //Divisable by both - this is the most spesific statement, so it has to go first if we don't bould another if-structure
    if(numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
        console.log('eplekake')
    } 
    // Only 3
    else if(numbers[i] % 3 == 0) {
        console.log('eple')
    } 
    // Divisable by 5
    else if (numbers[i] % 5 == 0) {
        console.log('kake')
    }
    // For any other condition we will just log the number
     else {
        console.log(numbers[i]);
    }
}

/* Part 4 */
document.getElementById('title').innerText = 'Hello, JavaScript';

/* Part 5 */

// Using a paramenter, the function can be used on other objects in the HTML document
// For these instances, the function is called from the button-element through an event decleared in the HTML-document
// I could also have used an eventlistener in this document.
function changeDisplay (id) {
    // Getting the element with the parameter given
    let element = document.getElementById(id);
    // Giving the element display 'none'
    element.style.display = 'none';
}

// Same procedure as above
function changeVisibility (id) {
    let element = document.getElementById(id)
    element.style.visibility = 'hidden';
    element.style.display = 'block';
}
// -.-
function reset (id) {
    let element = document.getElementById(id)
    element.style.visibility = 'visible';
    element.style.display = 'block';
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
// Getting the ul element from the HTML document
techList = document.getElementById('tech');
//Looping through the array "technologies"
for(let i = 0; i < technologies.length; i++) {
    // For every value in technologies, we create a list item
    let li = document.createElement('li');
    // Add the text from the array
    li.innerText = technologies[i];
    // Append the new li element to the parent (ul-element) 
    techList.appendChild(li);
}