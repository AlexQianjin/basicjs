// ==UserScript==
// @name         Auto Check
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.douyu.com/11100
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	let intervalId;

	// Your code here...
	const checkOnline = () => {
		let roomLevel = document.querySelector('.RoomLevelDetail-level');
		let checkButton = document.querySelector('.RoomLevelDetail-icon');
		let lastTime = document.querySelector('.Title-lastLiveTimeText');
		if (lastTime) {
			window.location.reload();
		}
		if (roomLevel) {
			if (roomLevel.innerHTML.indexOf('Lv') === 0) {
				console.log(roomLevel.innerHTML);
				if (!lastTime) {
					console.log('online');
					clearInterval(intervalId);
				}
			} else {
				console.log('to check');
				if (checkButton) {
					console.log('check button');
					checkButton.click();
					clearInterval(intervalId);
				}
			}
		}
	};
	intervalId = setInterval(checkOnline, 2 * 1000);
})();
