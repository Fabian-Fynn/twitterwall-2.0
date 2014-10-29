var angular = require('angular')
require('angular-sanitize')
require('angular-animate')
var link = require('twitter-text')
var emoji = require('emojize')

function avatar(url) {
  return url.replace('_normal','')
}

angular.module('twitterwall', ['ngSanitize', 'ngAnimate'])
  .controller('SiteCtrl', function($scope, $sanitize) {
    $scope.tweets = []

    $scope.linkTweet = function(tweet) {
      return emoji.emojize(link.autoLink(tweet.text, tweet.entities.urls))
    }

    $scope.socket.on('tweet', function(tweet){
      if (tweet.retweeted_status || tweet.possibly_sensitive) {
        return
      }

      tweet.user.profile_image_url = avatar(tweet.user.profile_image_url)
      tweet.user.profile_image_url_https = avatar(tweet.user.profile_image_url_https)
      tweet.created_at = new Date(tweet.created_at)

      $scope.tweets.unshift(tweet)

      if ($scope.tweets.length > 10) {
        $scope.tweets = $scope.tweets.slice(0, 10)
      }

      $scope.$apply()
    })
  })
  .run(function($rootScope) {
    $rootScope.socket = io()
  })
