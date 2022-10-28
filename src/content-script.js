import browser from 'webextension-polyfill';

browser.runtime.sendMessage({text: 'message'});
