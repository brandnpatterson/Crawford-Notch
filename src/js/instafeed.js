/**
 * Instafeed calling userID and using accessToken
**/

import Instafeed from 'instafeed.js';

const userFeed = new Instafeed ({
  get: 'user',
  userId: 3478504949,
  accessToken: '3478504949.1677ed0.ce4db999626a4f9ab7c2a4a36602f939',
  resolution: 'standard_resolution'
});
userFeed.run();
