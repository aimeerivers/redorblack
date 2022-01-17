let video = document.getElementById('redorblack');
let play = document.getElementById('play');

let choices = document.getElementById('choices');
let red = document.getElementById('red');
let black = document.getElementById('black');

let replay = document.getElementById('replay');

let gamestart = 14.48;

let stops = {
  'rules': 18.22,
  'gamestart': 18.22,
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

let startTime = {
  rules: 0,
  gamestart,
  ...tree,
};

let currentNode = undefined;
let pauseAfter = undefined;

const playNode = newNode => {
  currentNode = newNode;
  console.debug(startTime[currentNode], tree[currentNode]);
  video.currentTime = startTime[currentNode];
  pauseAfter = stops[currentNode] || endings[currentNode];
  video.play();
};

play.addEventListener('click', () => {
  play.style.display = 'none';
  playNode('rules');
});

const choose = chosen => {
  choices.style.display = 'none';
  const prefix = (tree[currentNode] ? currentNode : "");
  playNode(prefix + chosen);
};

red.addEventListener('click', () => choose('R'));
black.addEventListener('click', () => choose('B'));

video.addEventListener('timeupdate', (event) => {
  if (video.currentTime < pauseAfter) return;

  video.pause();

  if (endings[currentNode]) {
    replay.style.display = 'block';
  } else {
    choices.style.display = 'block';
  }
});

replay.addEventListener('click', () => {
  replay.style.display = 'none';
  playNode('gamestart');
});
