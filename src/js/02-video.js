import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// console.log(throttle)

const TIME_PLAY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timePlayed = JSON.parse(localStorage.getItem(TIME_PLAY));

player.on('timeupdate', throttle(getTimeupdate, 1000));

function getTimeupdate(evt){
  let storageTime = JSON.stringify(evt.seconds);
  localStorage.setItem(TIME_PLAY, storageTime);
}
player.setCurrentTime(timePlayed).then(function(timePlayed) {}).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;

    default:
      break;
  }});