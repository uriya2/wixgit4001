// Filename: backend/work2.jsw (web modules need to have a .jsw extension)


import wixData from 'wix-data';

export async function do3(){
	console.log("do2");
	let toInsert = {
	"title":        "yyaya wowowo Mr. do3 JSSS",
	"date": Date.now()
	};

	wixData.insert("data", toInsert)
	.then( (results) => {
			let item = results; //see item below
		} )
		.catch( (err) => {
			let errorMsg = err;
			console.log("err: "+err);
		} );
}