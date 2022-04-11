const colors = require('colors')

const args = process.argv.slice(2)
const [numInput1, numInput2] = args

const num1 = +numInput1
const num2 = +numInput2

if (isNaN(num1)) {
    console.log(colors.red('Первый аргумент не является числом'))
} else if (isNaN(num2)) {
    console.log(colors.red('Второй аргумент не является числом'))
} else if (num1 > 1 && num2 > 1) {
    let primeNumbers = []
    let primeCount = 0
    const colorsPalette = [colors.green, colors.yellow, colors.red]
    
    nextPrime:
        for (let i = num1; i <= num2; i++) {
            
            for (let j = 2; j < i; j++) {
                if (i % j === 0) continue nextPrime
            }
            
            primeNumbers.push(i)
        }
    
    if (primeNumbers.length !== 0) {
        for (let i = 0; i <= primeNumbers.length; i++) {
            console.log(
                colorsPalette[primeCount % 3](primeNumbers[i])
            )
            primeCount++
        }
    } else {
        console.log(colors.green('Простых чисел в заданном промежутке нет'))
    }
    
} else {
    console.log(colors.red('Аргументы должны быть больше 1'))
}


