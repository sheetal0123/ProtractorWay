/**
* Jasmine Syntax	
*
*Jasmine is a kind of BDD where we describe behaviour in step file directly i.e no story file
*'describe' and 'it' are jasmine global functions
*'describe' can contains multiple 'it' func, further 'it' can contains 'describe'
*/



console.log("---------------------describe function-------------------------")
describe("describtion of scenario", function{code});
describe("describtion of scenario", () => {code});    //typescript's fat arrow




console.log("---------------------it function-------------------------")
describe("desc of scenario", () =>{
	it("desc of test case 1", ()=>{code1});
	it("desc of test case 2", ()=>{code2});
	it("desc of test case 3", ()=>{code3});
});




console.log("--------------------expect-------------------------")
//expect is compulsory in 'it' func, expect is like assert stmt

describe("desc of scenario", () =>{

	it("desc of test case 1", ()=>{
		let a = 10;
		expect(a).toBe(10);
	});

	it("desc of test case 2", ()=>{
		let u;
		expect(u).toBeDefined("Not defined");
	});
	
});