import isPointInPolygon from "./isPointInPolygon";

test('expect fn to return true', ()=>{
    expect(isPointInPolygon(5,5,[[0,0],[0,10],[10,10],[10,0]])).toBe(true)
});

test('selecting edge of polygon counts as inside', ()=>{
    expect(isPointInPolygon(0,0,[[0,0],[0,10],[10,10],[10,0]])).toBe(true)
});

test('expect to return false for outside point', ()=>{
    expect(isPointInPolygon(11,0,[[0,0],[0,10],[10,10],[10,0]])).toBe(false)
});

test('expect to return true for U-Shape polygon', () => {
    expect(isPointInPolygon(3,8,[[0,0],[0,10],[4,10],[4,5],[6,5],[6,10],[10,10],[10,0]])).toBe(true)
});

test('expect to return false for point in gap in U-shape polygon', () => {
    expect(isPointInPolygon(5,8,[[0,0],[0,10],[4,10],[4,5],[6,5],[6,10],[10,10],[10,0]])).toBe(false)
});

test('expect to return true for C-shape polygon', ()=>{
    expect(isPointInPolygon(8,2,[[0,0],[0,10],[10,10],[10,6],[5,6],[5,4],[10,4],[10,0]])).toBe(true)
});

test('expect to return false for point in gap in C-shape polygon', ()=>{
    expect(isPointInPolygon(8,5,[[0,0],[0,10],[10,10],[10,6],[5,6],[5,4],[10,4],[10,0]])).toBe(false)
});

