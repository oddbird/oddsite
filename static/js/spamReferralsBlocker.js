import spammers from 'raw-loader!./spammers.txt';

const devHosts = [
  'oddsite.hexxie.com:3000',
  'localhost:3000',
  '127.0.0.1:3000',
];

window.isDevelopment = () => devHosts.indexOf(window.location.host) !== -1;

window.isSpamReferral = function() {
  const list = spammers.split('\n');
  const currentReferral = document.referrer;
  if (currentReferral) {
    list.unshift('oddsite.hexxie.com', 'localhost', '127.0.0.1');
    for (const spammer of list) {
      if (
        spammer &&
        currentReferral.toLowerCase().indexOf(spammer.toLowerCase()) !== -1
      ) {
        return true;
      }
    }
  }
  return false;
};
