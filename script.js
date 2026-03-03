const readline = require('readline')
const {add, greet} = require('./math')

// console.log(add(3,5))

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('what is your name \n', function(name){
//     rl.question('How old are you \n', function(age){
//         console.log(`My name is ${name}. I am ${age} years old`)

//         rl.close()
//     })
// })

function askQuestion(question){
    return new Promise((resolve) =>{
        rl.question(question, function(ans){
            resolve(ans)
        })
    })
}

async function main(){

    const name = await askQuestion('What is your name \n ')
    console.log(greet(name))

    const ans = await askQuestion('Would you like to perform simple math? (No/Yes)')

    if(ans.toLowerCase() === 'yes'){
        let num_1 = await askQuestion('Enter the first number\n ')
        let num_2 = await askQuestion('Enter the second number\n ')
        let ans = add(Number(num_1), Number(num_2))
        console.log(`${ans}`)
    }else{
        console.log('Bye for now')
    }

    rl.close()
}

main()

// Get the number of students score they want to compute
// get the name for each student
// Ask how many score they want to compute for each student
// Get those scores 
// Calculate the average for each student scores
// Determine the the student with the highest score
// Total student: 3
// student_1 
//     name, 
//     3 Score
//     score = [2,1,3]
//     avgScore = 6/3 = 3

// student_2
//     name, 
//     3 Score
//     score = [2,4,5]
//     avgScore = 12/3 = 4

// student_3
//     name, 
//     3 Score
//     score = [2,5,2]
//     avgScore = 9/3 = 3

// Student with highest score
// Name and the score
// Avg score