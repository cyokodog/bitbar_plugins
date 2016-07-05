#!/usr/bin/env /Users/cyokodog/.anyenv/envs/ndenv/versions/v4.2.4/bin/node

var bitbar = require('bitbar');

bitbar([
  {
    text: '❤',
    color: bitbar.darkMode ? 'white' : 'red',
    dropdown: false
  },
  bitbar.sep,
  {
    text: 'Unicorns',
    color: '#ff79d7',
    submenu: [
      {
          text: ':tv: Video',
          href: 'https://www.youtube.com/watch?v=9auOCbH5Ns4'
      },
      {
          text: ':book: Wiki',
          href: 'https://en.wikipedia.org/wiki/Unicorn'
      }
    ]
  },
  bitbar.sep,
  'Ponies'
]);
