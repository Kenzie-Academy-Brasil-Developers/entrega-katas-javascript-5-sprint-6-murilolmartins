// implemente aqui as funções de teste
function reverseString(word) {
    let neword = word.split("").reverse().join("")
    return neword
}
function testeReverseString1() {
    let result = reverseString("Legal");
    let expected = "lageL";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 function testeReverseString2() {
    let result = reverseString("Radio");
    let expected = "oidaR";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testeReverseString1()
 testeReverseString2
 
function reverseSentence(word) {
    let newword = word.split(" ").reverse().join(" ")
    return newword
}
const testeReverseSetence1 = () => {
    let result = reverseSentence("Murilo Martins");
    let expected = "Martins Murilo";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const testeReverseSetence2 = () => {
    let result = reverseSentence("Lebron James");
    let expected = "James Lebron";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseSetence1()
testeReverseSetence2()
function minimumValue(values) {
    let minvalue = Math.min(...values) 
    return minvalue
}
const testeMinimumValue1 = () => {
    let result = minimumValue([1,2,3,4]);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const testeMinimumValue2 = () => {
    let result = minimumValue([1,1,100,10,7]);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeMinimumValue1()
testeMinimumValue2()
function maximumValue(values) {
    let maxvalue = Math.max(...values)
    return maxvalue
}
const testeMaximumValue1 = () => {
    let result = maximumValue([1,2,3,4]);
    let expected = 4;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const testeMaximumValue2 = () => {
    let result = maximumValue([1,1,100,10,7]);
    let expected = 100;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeMaximumValue1()
testeMaximumValue2()
function calculateRemainder(dividendo, divisor) {
    let resto = dividendo % divisor
    return resto
}
const testeCalculateRemainder1 = () => {
    let result = calculateRemainder(4,2);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const testeCalculateRemainder2 = () => {
    let result = calculateRemainder(3,2);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeCalculateRemainder1()
testeCalculateRemainder2()

function distinctValues(list) {

    let newlist = list.split(" ")
    newlist = [... new Set(newlist)].join(" ")
    return newlist
}
const testeDistinctValues1 = () => {
    let result = distinctValues("1 2 3 3 4 4 6");
    let expected = "1 2 3 4 6";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testeDistinctValues2 = () => {
    let result = distinctValues("5 7 7 3 3 4");
    let expected = "5 7 3 4";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeDistinctValues1()
testeDistinctValues2()

function countValues(list) {

    let newlist1 = list.split(" ")
    let newlist2 = [... new Set(newlist1)]
    for (let i = 0; i < newlist2.length; i++) {
        let contador = 0
        for(let j = 0; j < newlist1.length; j++) {
            if(newlist2[i] === newlist1[j]) {
                contador++
            }
        }
        newlist2[i] = `${newlist2[i]}(${contador})`    
    }
    newlist2 = newlist2.join(" ")
    return newlist2
}
const testCountValues1 = () => {
    let result = countValues("1 2 2 3 3 4")
    let expected = "1(1) 2(2) 3(2) 4(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testCountValues2 = () => {
    let result = countValues("1 1 4 3 3 4")
    let expected = "1(2) 4(2) 3(2)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCountValues1()
testCountValues2()
