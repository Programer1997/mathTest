//import{sum,multiply} from "./math.js"

const math = require("./math.js");

test("sum test", ()=>{
    expect(math.perro(2, 3)).toBe(5);
});

test("sum test", ()=>{
    expect(math.perro(5, 3)).toBe(8);
});

test("sum test", ()=>{
    expect(math.multiply(3, 3)).toBe(9);
});

test("sum test", ()=>{
    expect(math.multiply(2, 3)).toBe(6);
});