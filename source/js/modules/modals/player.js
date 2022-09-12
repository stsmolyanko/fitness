let modal = document.querySelector('.modal--player');
let playerContainer = modal.querySelector('.modal__content');
let video = document.createElement('iframe');

let insertVideo = () => {
  video.width = 900;
  video.height = 500;
  video.src = 'https://www.youtube.com/embed/9TZXsZItgdw';
  video.setAttribute('frameborder', '0');
  video.setAttribute('autoplay', '');
  playerContainer.append(video);
};

let removeVideo = () => {
  video.remove();
};

export {insertVideo, removeVideo};

