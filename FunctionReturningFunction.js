const fnParent = (() => {

	//Member functions as properties of parent function
	const fnPrintStr = (str) => { console.log(str);};
	const fnPrintHelloStr = (str) => { console.log('Hello' + str);};
	const fnAlertStr = (str) => { alert(str);};

	//Return multiple functions from one function
	return {
		fnPrint: fnPrintStr,
		fnHello: fnPrintHelloStr,
		fnAlert: fnAlertStr
		};
})();

//Call 
//fnParent.fnHello('Pankaj');