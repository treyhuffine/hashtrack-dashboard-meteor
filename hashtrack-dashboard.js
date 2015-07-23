Tweet = new Mongo.Collection("tweets");
var fullTweets = Tweet.find({});
var currentTime = new Date().getTime();
var dayLength = 86400000;
var previousDay = currentTime - dayLength;

if (Meteor.isClient) {
  // Template.body.helpers({
  //   tweets: function () {
  //     return Tweet.find({});
  //   }
  // });
  angular.module('hashtrack', ['angular-meteor']);
  angular.module('hashtrack').controller('dash', ['$scope', '$meteor',
    function($scope) {
      $scope.tweets = [
        {timestamp_ms: 21231},
        {timestamp_ms: 77777}
      ]
    }]);
}


Meteor.methods({
  filterTweet: function(tweets) {
    return tweets.filter(function(e, i) {
      return parseInt(e.timestamp_ms) > previousDay;
    });
  }
});
