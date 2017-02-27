import spammers from 'raw-loader!./spammers.txt';

window.isSpamReferral = function () {
  const list = spammers.split('\n');
  const currentReferral = document.referrer;
  if (currentReferral) {
    list.unshift('oddsite.hexxie.com', 'localhost');
    for (const spammer of list) {
      if (spammer &&
          currentReferral.toLowerCase().indexOf(spammer.toLowerCase()) !== -1) {
        return true;
      }
    }
  }
  return false;
};
