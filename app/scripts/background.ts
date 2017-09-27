// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion);
});

chrome.webRequest.onBeforeRequest.addListener(
  details => {
    if (details.url.match(/\?weighted_character_count=true/)) {
      return {};
    }
    return {redirectUrl: "https://twitter.com/i/tweet/create?weighted_character_count=true"};
  },
  {urls: ["*://twitter.com/i/tweet/create"]},
  ["blocking", "requestBody"]);
