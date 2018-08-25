describe('TypeScript Sanity Test 1', function() {
  it('string indexOf test', function() {
    let str = 'we are learning jasmine';
    expect(str.indexOf('j')).toEqual(16);
  });
  
  it('string chatAt test', function() {
    let str = 'we are learning jasmine';
    expect(str.charAt(16)).toEqual('j');
  });
  
});


//let and var are both same
describe('TypeScript Sanity Test 2', function() {
 it('string substr test', function() {
    let str = 'we are learning jasmine';
	expect(str.substr(16,8)).toEqual('jasmine'); // starting index = 16, and length to be tested is 8
  });
  
 it('string concatenation test', function() {
    let a = "hello";
	let b = "-jasmine";
	var c = a + b;
    //expect(c).toEqual('hello-jasmine');
  });

});