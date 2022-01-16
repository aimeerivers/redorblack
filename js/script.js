let video = document.getElementById('redorblack');
let play = document.getElementById('play');

let choices = document.getElementById('choices');
let red = document.getElementById('red');
let black = document.getElementById('black');

let replay = document.getElementById('replay');

let gamestart = 14.48;

let stops = {
  '0': 18.22,
  'R': 26.87,
  'RR': 38.88,
  'RB': 73.03,
  'B': 99.93,
  'BR': 110.39,
  'BB': 139.38,
};

let tree = {
  'R': 20.22,
  'RR': 28.87,
  'RRR': 40.88,
  'RRB': 53.56,
  'RB': 65.08,
  'RBR': 75.03,
  'RBB': 83.89,
  'B': 93.16,
  'BR': 101.93,
  'BRR': 112.39,
  'BRB': 121.02,
  'BB': 132.17,
  'BBR': 141.38,
  'BBB': 153.20,
};

let endings = {
  'RRR': 51.56,
  'RRB': 63.08,
  'RBR': 81.89,
  'RBB': 91.16,
  'BRR': 119.02,
  'BRB': 130.17,
  'BBR': 151.20,
  'BBB': 160.92,
};

play.addEventListener('click', () => {
  video.play();
  play.style.display = 'none';
});

red.addEventListener('click', () => {
  choices.style.display = 'none';
  if(video.currentTime >= stops['0'] && video.currentTime <= stops['0'] + 1) {
    video.currentTime = tree['R'];
  }
  if(video.currentTime >= stops['R'] && video.currentTime <= stops['R'] + 1) {
    video.currentTime = tree['RR'];
  }
  if(video.currentTime >= stops['RR'] && video.currentTime <= stops['RR'] + 1) {
    video.currentTime = tree['RRR'];
  }
  if(video.currentTime >= stops['RB'] && video.currentTime <= stops['RB'] + 1) {
    video.currentTime = tree['RBR'];
  }
  if(video.currentTime >= stops['B'] && video.currentTime <= stops['B'] + 1) {
    video.currentTime = tree['BR'];
  }
  if(video.currentTime >= stops['BR'] && video.currentTime <= stops['BR'] + 1) {
    video.currentTime = tree['BRR'];
  }
  if(video.currentTime >= stops['BB'] && video.currentTime <= stops['BB'] + 1) {
    video.currentTime = tree['BBR'];
  }
  video.play();
});

black.addEventListener('click', () => {
  choices.style.display = 'none';
  if(video.currentTime >= stops['0'] && video.currentTime <= stops['0'] + 1) {
    video.currentTime = tree['B'];
  }
  if(video.currentTime >= stops['R'] && video.currentTime <= stops['R'] + 1) {
    video.currentTime = tree['RB'];
  }
  if(video.currentTime >= stops['RR'] && video.currentTime <= stops['RR'] + 1) {
    video.currentTime = tree['RRB'];
  }
  if(video.currentTime >= stops['RB'] && video.currentTime <= stops['RB'] + 1) {
    video.currentTime = tree['RBB'];
  }
  if(video.currentTime >= stops['B'] && video.currentTime <= stops['B'] + 1) {
    video.currentTime = tree['BB'];
  }
  if(video.currentTime >= stops['BR'] && video.currentTime <= stops['BR'] + 1) {
    video.currentTime = tree['BRB'];
  }
  if(video.currentTime >= stops['BB'] && video.currentTime <= stops['BB'] + 1) {
    video.currentTime = tree['BBB'];
  }
  video.play();
});

video.addEventListener('timeupdate', (event) => {
  for (const key in stops) {
    if(video.currentTime >= stops[key] && video.currentTime <= stops[key] + 1) {
      video.pause();
      choices.style.display = 'block';
    }
  }
  for (const key in endings) {
    if(video.currentTime >= endings[key] && video.currentTime <= endings[key] + 1) {
      video.pause();
      replay.style.display = 'block';
    }
  }
});

replay.addEventListener('click', () => {
  replay.style.display = 'none';
  video.currentTime = gamestart;
  video.play();
});
