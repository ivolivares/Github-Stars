chrome.runtime.onInstalled.addListener(function(n){return"install"===(null!=n?n.reason:void 0)?chrome.runtime.openOptionsPage?chrome.runtime.openOptionsPage():window.open(chrome.runtime.getURL("options/index.html")):void 0})