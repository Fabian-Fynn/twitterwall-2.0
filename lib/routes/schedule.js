'use strict'

const request = require('request')
const Tschuad = require('../tschuad/')

module.exports = function (app, lib) {
  app.get('/schedule', function (req, res) {
    app.debug('sending schedule...')
    request('https://tschuad-api.herokuapp.com/festivals/1/events?include=room', { json: true }, (err, resp, body) => {
      const schedule = Tschuad.prettify(body)
      res.send(schedule);
    })
  })
}
