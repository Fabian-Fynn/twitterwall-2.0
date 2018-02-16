'use strict'

/*jshint camelcase: false */

var e = process.env

module.exports = {
  title: e.TITLE || '.concat() 2018 Twitterwall',
  hashtag: e.HASHTAG || '#concat18',
  port: e.PORT || 8000,
  twitter: {
    throttle: 1000,
    tracks: (e.HASHTAGS || '#concat,#concat18,#concat2018,#valentinstag,#stau,#valentine,#valentinesday,#love').split(','),
    users: (e.USERS || 'conc_at').split(','),
    tweetHistory: true,
    auth: {
      access_token: e.ACCESS_TOKEN,
      access_token_secret: e.ACCESS_TOKEN_SECRET,
      consumer_key: e.CONSUMER_KEY,
      consumer_secret: e.CONSUMER_SECRET
    }
  },
  lanyrd: {
    overwriteDate: '2015-03-07', // for debugging
    year: e.LANYRD_YEAR || '2015',
    id: e.LANYRD_ID || 'concat',
    showNext: 15000,
    roomColors: {
      'Audimax': '#c30813',
      'Room 110': '#169c19',
      'Lounge': '#c35a18'
    }
  },
  admin: {
    enableAPI: e.ADMIN_USER && e.ADMIN_PASSWORD,
    username: e.ADMIN_USER,
    password: e.ADMIN_PASSWORD,
    blocked: e.BLOCKED_USERS ? e.BLOCKED_USERS.split(',') : [],
    blockRetweets: true,
    blockPossiblySensitive: true
  },
  sponsors: [{
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/namics.jpg',
    name: 'Namics',
    duration: 20000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/google.jpg',
    name: 'Google',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/aws.jpg',
    name: 'Amazon Web Services',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/mozilla.jpg',
    name: 'Mozilla',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/automattic.jpg',
    name: 'Automattic',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/pixelart.jpg',
    name: 'Pixelart',
    duration: 10000
  }, {
    image: 'https://conc.at/images/logos/fh@2x.jpg',
    name: 'University of Applied Sciences Salzburg',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/poi.jpg',
    name: 'Porsche Informatik',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/beenergised.jpg',
    name: 'Be:ENERGISED',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/stickeryou.jpg',
    name: 'StickerYou',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/dna.jpg',
    name: 'Die Netzwerkarchitekten',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/jetbrains.jpg',
    name: 'JetBrains',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/kat.jpg',
    name: 'Karriere.at',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/elements.jpg',
    name: 'elements',
    duration: 10000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/findologic.jpg',
    name: 'Findologic',
    duration: 5000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/manner.jpg',
    name: 'Manner',
    duration: 5000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/makava.jpg',
    name: 'Makava',
    duration: 5000
  }, {
    image: 'http://assets.fabianhoffmann.io/concat/sponsors/gesagtgetan.jpg',
    name: 'gesagt.getan',
    duration: 5000
  }
  ]
}
