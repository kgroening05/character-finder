export default function stringToCoordsArray(stringIn){
    const tempArr = stringIn.split(',').map(element => Number(element))
    let accumArr = [];
    let finalArr = [];
    tempArr.forEach(element => {
        if (accumArr.length >= 2){
            finalArr.push(accumArr);
            accumArr = [];
        }
        accumArr.push(element)
    });
    finalArr.push(accumArr);
    return (finalArr)
}