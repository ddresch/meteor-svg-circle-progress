var milliseconds = 10000;
var frmRate = milliseconds / 60; // 25 fps

Meteor.setInterval(function () {
  var progress = Session.get('secProgress');
  if(progress == 33) progress = 0;
  progress++;
  Session.set('secProgress', progress);
}, 1000);

Meteor.setInterval(function () {
  var ms = Session.get('percentageProgress');
  if(ms == (milliseconds / frmRate)) ms = 0; 
  ms += 1;
  Session.set('percentageProgress', ms);
}, frmRate);

Template.body.helpers({
  getSecProgress: function() {
    return Session.get('secProgress');
  },
  getPercentageProgress: function() {
    var percentage = Session.get('percentageProgress') * 100 / (milliseconds / frmRate);
    return percentage;
  }
});

Template.body.rendered = function(){
  Session.set('secProgress',0);
  Session.set('percentageProgress', 0);
};