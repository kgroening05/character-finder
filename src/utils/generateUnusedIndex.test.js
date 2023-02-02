import generateUnusedIndex from "./generateUnusedIndex";

test('returns a new number if a value is not in the usedNumberList', ()=>{
    const usedNumberList = [0, 1, 2]
    const fullList = [0, 1, 2, 3]
    expect(generateUnusedIndex(usedNumberList, fullList)).toBe(3)
})

test('will return a 0', () => {
    const usedNumberList = [3, 1, 2]
    const fullList = [0, 1, 2, 3]
    expect(generateUnusedIndex(usedNumberList, fullList)).toBe(0)
})

test('if usedNumberList is full, return something else', () => {
    const usedNumberList = [3, 1, 2, 0]
    const fullList = [0, 1, 2, 3]
    expect(generateUnusedIndex(usedNumberList, fullList)).toBe('full')
})



