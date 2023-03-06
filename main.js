function getMaxFrom10Random(){
    let maxVal = Math.floor(Math.random()*3)+5;
    let minVal = maxVal;

    for (let i=0; i<9; i++){
        const tempValue = Math.floor(Math.random()*3)+5;
        tempValue > maxVal ? maxVal = tempValue : maxVal;
        tempValue < minVal ? minVal = tempValue : minVal;
    }
    console.log("Maximum des 10 chiffres :", maxVal);
    console.log("Minimum des 10 chiffres :", minVal);
    return true;
}

function getMinAndMax(array){
    maxVal = array[0];
    minVal = maxVal;

    for (value in array){
        maxVal < array[value] ? maxVal = array[value] : maxVal;
        minVal > array[value] ? minVal = array[value] : minVal;
    }

    console.log("Plus petite valeur du tableau :", minVal);
    console.log("Plus grande valeur du tableau :", maxVal);
    return true;
}

function printUntil4Same(){
    const arrayOfInts = [];
    let isFound;
    let mustEnd;
    while (true){
        isFound = false;
        tempValue = Math.floor(Math.random()*3)+5;
        console.log("Nouveau chiffre :", tempValue);
        for (value in arrayOfInts){
            if (arrayOfInts[value][0] === tempValue){
                isFound = true;
                arrayOfInts[value][1]+=1;
                if (arrayOfInts[value][1]===4){
                    mustEnd = true;
                }
                break;
            }
        }
        if (!isFound){
            arrayOfInts.push([tempValue, 1]);
        } else if (mustEnd){
            break;
        }
    }
    return true;
}

function randomAfter1Sec(){
    setTimeout(() =>{
        console.log("Nombre affiché après 1 seconde :", Math.floor(Math.random()*3)+5)
    }
    ,1000);
    return true;
}

function recursiveRandom(array = []){
    setTimeout(() => {
        let tempValue = Math.floor(Math.random()*3)+5
        console.log("Nombre affiché après 0.5s :", tempValue);
        if (!array.includes(tempValue)){
            array.push(tempValue);
            recursiveRandom(array);
        }
    }
    ,500);
    return true;
}

const arrayRandom = [
    Math.floor(Math.random()*3)+5,
    Math.floor(Math.random()*3)+5,
    Math.floor(Math.random()*3)+5,
    Math.floor(Math.random()*3)+5,
    Math.floor(Math.random()*3)+5
];

async function launchEverything(){
    let answer1 = getMinAndMax(arrayRandom);
    let answer2 = printUntil4Same();
    let answer3 = await randomAfter1Sec();
    let answer4 = await recursiveRandom();
}

launchEverything();