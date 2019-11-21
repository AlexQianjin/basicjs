// ==UserScript==
// @name         Send messages automatically
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Alex Qin
// @match        https://www.douyu.com/11100
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const messages = ['好听', '好看', '美美美', '大大大'];
    const intervalTime = 30 * 1000;
    let count = 0;
    const getMessage = arr => arr[count%arr.length];
    const send = () => {
        let sendButton = document.querySelector('.ChatSend .ChatSend-button ');
        if(sendButton && sendButton.innerHTML === '发送') {
            sendButton.click();
            console.log(sendButton.innerHTML, 23);
        }
        console.log(sendButton, 25);
    };
    const sendMessage = () => {
        let textarea = document.querySelector('.ChatSend textarea');
        if(textarea) {
            textarea.value = getMessage(messages);
            count++;
            setTimeout(send, 2 * 1000);
        }
    };
    setInterval(sendMessage, intervalTime);
    // setTimeout();
})();