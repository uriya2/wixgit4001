// For full API documentation, including code examples, visit http://wix.to/94BuAAs

import {do3} from 'backend/work2';
import {doExample} from 'backend/edm_example';
import {multiply} from 'backend/nothing';

$w.onReady(async function () {
	
});

export async function button1_click(event) {
	await do3('fromButton');
}

export function button2_click(event) {
	doExample('fromButton')
}