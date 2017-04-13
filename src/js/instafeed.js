/**
 * Instafeed calling userID and using accessToken
**/

// Require Instafeed

import Instafeed from 'instafeed.js';

const userFeed = new Instafeed({
  get: 'user',
  userId: 4229280445,
  accessToken: '4229280445.1677ed0.0a9416420af547f1bc1375319854b392',
  resolution: 'standard_resolution'
});
userFeed.run();
