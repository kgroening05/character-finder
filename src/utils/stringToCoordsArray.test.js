import stringToCoordsArray from "./stringToCoordsArray.js";

test('expect fn to return array with one array element', ()=>{
    const string = "1,2";
    const result = [[1,2]];
    expect(stringToCoordsArray(string)).toStrictEqual(result)
});

test('expect fn to return array with one array element, ignoring spaces', ()=>{
    const string = " 1 , 2 ";
    const result = [[1,2]];
    expect(stringToCoordsArray(string)).toStrictEqual(result)
});

test('expect fn to return array with two array elements', ()=>{
    const string = "1,2,3,4";
    const result = [[1,2],[3,4]];
    expect(stringToCoordsArray(string)).toStrictEqual(result)
});

test('expect fn to return array for a full polygon', ()=>{
    const string = "592,1443,584,1387,621,1396,625,1430";
    const result = [[592,1443],[584,1387],[621,1396],[625,1430]];
    expect(stringToCoordsArray(string)).toStrictEqual(result)
});
