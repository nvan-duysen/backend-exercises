function showMaxMinFrom10Random() {
    let maxVal = Math.floor(Math.random() * 3) + 5;
    let minVal = maxVal;

    for (let i = 0; i < 9; i++) {
        const tempValue = Math.floor(Math.random() * 3) + 5;
        tempValue > maxVal ? maxVal = tempValue : maxVal;
        tempValue < minVal ? minVal = tempValue : minVal;
    }
    console.log("Maximum des 10 chiffres :", maxVal);
    console.log("Minimum des 10 chiffres :", minVal);
    return true;
}

function showMinAndMax(array) {
    maxVal = array[0];
    minVal = maxVal;

    for (value in array) {
        maxVal < array[value] ? maxVal = array[value] : maxVal;
        minVal > array[value] ? minVal = array[value] : minVal;
    }

    console.log("Plus petite valeur du tableau :", minVal);
    console.log("Plus grande valeur du tableau :", maxVal);
    return;
}

function showUntil4Same(objOfInts = {}) {
    let isFound = false;
    let objectKeys = Object.keys(objOfInts);
    let tempValue = Math.floor(Math.random() * 3) + 5;
    console.log("Nouveau chiffre :", tempValue);
    for (value in objectKeys) {
        let maValue = objectKeys[value]
        if (maValue == tempValue) {
            isFound = true;
            objOfInts[maValue] += 1;
            if (objOfInts[maValue] === 4) {
                return
            }
            break;
        }
    }
    if (!isFound) {
        objOfInts[tempValue] = 1;
    }
    showUntil4Same(objOfInts);
}

function showRandomAfter1Second() {
    setTimeout(() => {
        console.log("Nombre affiché après 1 seconde :", Math.floor(Math.random() * 3) + 5);
        showRecursiveRandom();
    }
        , 1000);
    return;
}

function showRecursiveRandom(array = []) {
    setTimeout(() => {
        let tempValue = Math.floor(Math.random() * 3) + 5
        console.log("Nombre affiché après 0.5s :", tempValue);
        if (!array.includes(tempValue)) {
            array.push(tempValue);
            showRecursiveRandom(array);
        }
    }
        , 500);
    return;
}

const arrayRandom = [
    Math.floor(Math.random() * 3) + 5,
    Math.floor(Math.random() * 3) + 5,
    Math.floor(Math.random() * 3) + 5,
    Math.floor(Math.random() * 3) + 5,
    Math.floor(Math.random() * 3) + 5
];

function launchEverything() {
    showMaxMinFrom10Random();
    showMinAndMax(arrayRandom);
    showUntil4Same();
    showRandomAfter1Second();
}

launchEverything();