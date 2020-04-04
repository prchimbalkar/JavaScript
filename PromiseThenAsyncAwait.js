//function returning promise
const fnPromise = (flag) => {
	return new Promise((resolve, reject) => {
		if (flag) {
			resolve('true');
		} else {
			reject('flase');
		}
	});
}

//promise then
fnPromise(true).then((result) => {
	console.log(result);
}).catch((err) => {console.log(err);});

//async await
(async() => {
	let result = await fnPromise(true);
	console.log(result);
})();

//async function
const fnResolver = async() => {
let result = await fnPromise(true);
	console.log(result);
}
//call: fnResolver();

//with conventional approach
async function fnResolverConventional() {
let result = await fnPromise(true);
	console.log(result);
}
//call: fnResolverConventional();
