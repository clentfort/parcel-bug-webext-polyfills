import browser from 'webextension-polyfill';

browser.tabs.onUpdated.addListener(console.log);
