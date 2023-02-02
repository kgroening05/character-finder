export default function generateUnusedIndex(usedNumberList, fullList){
    if (usedNumberList.length === fullList.length){return 'full'}
    const newNum = Math.floor(Math.random() * fullList.length)
    const numberFound = usedNumberList.find(element=> element === newNum)
    if (typeof numberFound === 'undefined') {
        return newNum
    } else {
        return generateUnusedIndex(usedNumberList, fullList)
    }
}
