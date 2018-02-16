'use strict'

var randomColor = require('randomcolor')

module.exports = function (app) {
  app.controller('ScheduleCtrl', function ($scope, $http, $interval, config) {
    var today = config.lanyrd.overwriteDate || (new Date()).toISOString().substr(0, 10)
    var forerun = config.lanyrd.forerun || 1000 * 60 * 60
    var roomColors = config.lanyrd.roomColors

    $scope.eventdayify = function (input) {
      var now = new Date()
      var date = new Date(input)
      date.setFullYear(now.getFullYear())
      date.setMonth(now.getMonth())
      date.setDate(now.getDate())
      return date.toISOString()
    }

    console.log('request Schedule');

    $http.get('/schedule').then(function (res) {
      var roomData = {}
      console.log('res :', res);

      Object.keys(res.data).forEach(function (roomID) {
        const room = res.data[roomID]

        if (!roomColors[roomID]) roomColors[roomID] = randomColor()
      })

      setCurrentTalk(res.data)
      $interval(setCurrentTalk.bind(null, res.data), config.lanyrd.showNext)
    })

    var currentIndex = 0
    function setCurrentTalk(roomData) {
      var nextTalks = getNextTalks(roomData)
      if (nextTalks[currentIndex]) {
        $scope.nextUp = nextTalks[currentIndex]
        currentIndex++
        return
      }

      if (nextTalks[0]) $scope.nextUp = nextTalks[0]
      currentIndex = 1
    }

    function getNextTalks(roomData) {
      var nextTalks = []
      var time = new Date()
      var now = new Date(today)
      now.setHours(time.getHours())
      now.setMinutes(time.getMinutes())

      Object.keys(roomData).forEach(function (room) {
        // roomData[room].some(function (talk) {
        //   var time = new Date(talk.start_time)

        //   var diff = time - now

        //   if (diff < 0 || diff > forerun) return false

        //   talk.style = {
        //     spacename: { color: roomColors[room] }
        //   }

        //   nextTalks.push(talk)
        //   return true
        // })
      })
      return nextTalks
    }
  })
}
