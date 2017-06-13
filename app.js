//function repeat takes two arguements
	//first is arbitrary function fn
	//second is a number n
	//repeat loops n times
	//each iteration calls fn
	//each iteration also creates hello and goodbye function

//hello and goodbye function log 'hello' and 'goodbye'

//repeat function calls hello function 5 times
//repeat calls goodbye 5 times

function repeat(fn, n) {
	for(var i = 0; i < n; i++) {
		fn();
		for(var x = 0; x < 5; x++)	{
			function hello() {
				console.log('Hello');
			}
			hello();
			function goodbye() {
				console.log('Goodbye');
			}
			goodbye();
		}
	}
}

function fn() {
	console.log('This is function fn');
}

repeat(fn, 2);