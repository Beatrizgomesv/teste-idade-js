function buttonAction() {
    const age = document.getElementById('age').value
    console.log('Idade digitada: ', age);

    const agesUntilZero = []

    for(let i = age; i > -1; i--) {
        agesUntilZero.push(Number(i));
    }

    console.log(agesUntilZero.join(','))
    agesUntilZero.forEach(num => console.log(num))
    console.log(agesUntilZero
        .filter(num => num % 2 == 0 && num > 0)
        .sort((a,b) => a-b).join(','))

}