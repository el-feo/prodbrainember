import Ember from 'ember';

export default Ember.Component.extend({
  seconds: 0,
  timerId: null,
  timerRunning: false,
  actions: {
    scheduleTimer: function() {
      this.set('timerId', Ember.run.later(this, function() {
        this.set('timerRunning', true);
        this.incrementProperty('seconds');
        this.send('scheduleTimer');
        this.sendAction('tick');
      }, 1000));
    },
    stopTimer: function() {
      Ember.run.cancel(this.get('timerId'));
      this.set('timerRunning', false);
    },
    resetTimer: function() {
      this.send('stopTimer');
      this.set('seconds', 0);
    }
  },
  startTimer: function() {
    this.send('scheduleTimer');
  }.on('didInsertElement')
});
