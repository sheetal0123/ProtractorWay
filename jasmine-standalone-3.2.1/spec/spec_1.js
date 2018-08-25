describe('JavaScript Sanity Test', function() {
  it('addition test', function() {
    var a = 10;
	var b = 20;
	var sum = a + b;
    expect(sum).toEqual(30);
  });
  
  it('subtraction test', function() {
    var a = 100;
	var b = 50;
	var sub = a - b;
    expect(sub).toEqual(50);
  });
  
  
  it('mult test', function() {
    let a = 12;
	let b = 12;
	let mul = a * b;
    //expect(mul).toEqual(144);
  });
  
  
  it('div test', function() {
    let a = 12;
	let b = 6;
	let div = a / b;
    expect(div).toEqual(2);
  });
  
  
});