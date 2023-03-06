const os = require('node:os');

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
    let maxVal = array[0];
    let minVal = maxVal;

    for (let value in array) {
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
    for (let value in objectKeys) {
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
        } else {
            readPathVarsWithSplit();
        }
    }
        , 500);
    return;
}

function readPathVarsWithSplit() {
    let data = process.env.PATH;
    let split = data.split(";");
    console.log("Solution avec split :");
    for (let element in split){
        console.log(split[element]);
    }
    readPathVarsWithoutSplit();
}

function readPathVarsWithoutSplit(){
    let data = process.env.PATH;
    console.log("Solution sans split :");
    while (data.indexOf(";")!==-1){
        let dataIndex = data.indexOf(";");
        let dataLine = data.substring(0, dataIndex);
        console.log(dataLine);
        data = data.substring(data.indexOf(";")+1);
    }
    console.log(data);
    readIPv4Addresses();
}

function readIPv4Addresses(){
    const interfaces = os.networkInterfaces();

    const nomsInterfaces = Object.keys(interfaces);

    console.log("Voici les adresses IPv4 des interfaces réseaux de la machine :");
    for (let nomInterface in nomsInterfaces){
        const maValue = nomsInterfaces[nomInterface];
        const monInterface = interfaces[maValue];
        for (let numeroAdresse in monInterface){
            if (monInterface[numeroAdresse]["family"]==="IPv4"){
                console.log(maValue, ":", monInterface[numeroAdresse]["address"]);
            }
        }
        
    }

    readIPv6Addresses()
}

function readIPv6Addresses(){
    const interfaces = os.networkInterfaces();

    const nomsInterfaces = Object.keys(interfaces);

    console.log("Voici les adresses IPv6 des interfaces réseaux de la machine :");
    for (let nomInterface in nomsInterfaces){
        const maValue = nomsInterfaces[nomInterface];
        const monInterface = interfaces[maValue];
        for (let numeroAdresse in monInterface){
            if (monInterface[numeroAdresse]["family"]==="IPv6"){
                console.log(maValue, ":", monInterface[numeroAdresse]["address"]);
            }
        }
    }
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