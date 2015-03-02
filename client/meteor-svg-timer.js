Meteor.setInterval(function () {
  var progress = Session.get('progress');
  if(progress == 33) progress = 0;
  progress++;
  Session.set('progress', progress);
}, 1000);

Template.body.helpers({
  getProgress: function() {
    return Session.get('progress');
  }
});

Template.body.rendered = function(){
  Session.set('progress',0);  
};