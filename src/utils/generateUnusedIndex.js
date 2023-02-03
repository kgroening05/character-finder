export default function generateUnusedIndex(usedNumberList, fullList){
    const fullLength = Object.keys(fullList).length
    if (usedNumberList.length === fullLength){return 'full'}
    const newNum = Math.floor(Math.random() * fullLength)
    const numberFound = usedNumberList.find(element=> element === newNum)
    if (typeof numberFound === 'undefined') {
        return newNum
    } else {
        return generateUnusedIndex(usedNumberList, fullList)
    }
}
