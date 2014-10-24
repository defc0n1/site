AgendaController = FastRender.RouteController.extend({
  waitOn: function () {
    return [
      Meteor.subscribe('schedule', this.params._id),
      Meteor.subscribe('Followers')
    ];
  },

  data: function () {
    return Schedule.findOne();
  },

  action: function () {
    this.render();
  }

});