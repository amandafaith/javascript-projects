// function makeLine(size) {
//     let line = '';
//     for (let i = 0; i < size; i++) {
//         line += '#'; 
//     }
//     return line;
// }

// console.log(makeLine(5));



// function makeSquare(size) {
//     let square = '';
//     for (let i = 0; i < size; i++) {
//         square += makeLine(size) + '\n'
//     }
//     return square
// }

// console.log(makeSquare(5));


// function makeRectangle(width, height) {
//     let rectangle = '';
//     for (let i = 0; i < height; i++) {
//         rectangle += makeLine(width) + '\n';
//     }
//     return rectangle.slice(0, -1);
// }

// console.log(makeRectangle(3, 5));


// function makeDownwardStairs(height) {
//     let stairs = '';
//     for (let i = 0; i < height; i++) {
//         stairs += makeLine(i + 1) + '\n'
//     }
//     return stairs.slice(0, -1)
// }

// console.log(makeDownwardStairs(7))



// function makeSpaceLine(numSpaces, numChars) {
//     let spaceLine = '';
//     for (let i = 0; i < numSpaces; i++) {
//         spaceLine += ' ';
//     }
//     return spaceLine + makeLine(numChars) + spaceLine

// }


// console.log(makeSpaceLine(3, 5));


// function makeIsoscelesTriangle(height) {
//     let triangle = '';
//     for (let i = 0; i < height; i++) {
//         triangle += makeSpaceLine(height - i - 1, 2*i + 1) + '\n' 
//     }
//     return triangle.slice(0, -1);

// }

// console.log(makeIsoscelesTriangle(5));


// function reverse(str) {
//     let reversed = '';

//     for (let i = 0; i < str.length; i++) {
//         reversed = str[i] + reversed;
//     }
//     return reversed
// }


// console.log(reverse(makeIsoscelesTriangle(5)))


// function makeDiamond(height) {
//     let diamond = ''
//     for (let i = 0; i < height; i++) {
//         diamond += makeIsoscelesTriangle() + reverse(makeIsoscelesTriangle())
//     }
//     return diamond.slice(0, -1)


// }


// console.log(makeDiamond(5))



//BONUS MISSION
// Refactor your functions so that they take a single character as a parameter, and draw the shapes with that character instead of always using '#'. Make the new parameter optional, with default value '#'




function makeLine(size, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char; 
    }
    return line;
}

console.log(makeLine(5, '$'));



function makeSquare(size, char) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += makeLine(size, char) + '\n'
    }
    return square
}

console.log(makeSquare(5, '$'));


function makeRectangle(width, height, char) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width,char) + '\n';
    }
    return rectangle.slice(0, -1);
}

console.log(makeRectangle(3, 5, '$'));


function makeDownwardStairs(height, char) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i + 1, char) + '\n'
    }
    return stairs.slice(0, -1)
}

console.log(makeDownwardStairs(7, '$'))



function makeSpaceLine(numSpaces, numChars, char) {
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += ' ';
    }
    return spaceLine + makeLine(numChars, char) + spaceLine

}


console.log(makeSpaceLine(3, 5, '$'));


function makeIsoscelesTriangle(height, char) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += makeSpaceLine(height - i - 1, 2*i + 1, char) + '\n' 
    }
    return triangle.slice(0, -1);

}

console.log(makeIsoscelesTriangle(5, '@'));


function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed
}


console.log(reverse(makeIsoscelesTriangle(5)))


//not figured out yet
// still need to make a makeDiamond function that prints both

function makeDiamond(height, char) {
    let diamond = ''
    for (let i = 0; i < height; i++) {
        diamond += makeIsoscelesTriangle(char) + reverse(makeIsoscelesTriangle(char))
    }
    return diamond.slice(0, -1)


}


console.log(makeDiamond(5, '%'))


