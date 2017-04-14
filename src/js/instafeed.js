/**
 * Instafeed calling userID and using accessToken
**/

import Instafeed from 'instafeed.js';

const userFeed = new Instafeed({
  get: 'user',
  userId: 3478504949,
  accessToken: '3478504949.1677ed0.b143766a52f14d0da5c2fc32891ac53b',
  resolution: 'standard_resolution'
});
userFeed.run();
