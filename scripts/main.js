
///////// SCREEN 1 /////////////////////////////////////////////////

var MenuScreen = Backbone.View.extend({
  tagName: 'main',
  className: 'startScreen',
  template : _.template($('#menuTemplate').html()),

  render: function (){
    this.$el.html(this.template({startScreen: this.post}));
  }

});


///////// App Router /////////////////////////////////////////////////
var AppRouter = Backbone.Router.extend({

  routes: {
    "" : "main",
    "play" : "play",
    "leaderboard" : "leaderboard",
    "settings" : "settings",
    },

    main: function(){
      setTimeout(function(){
        var view = new MenuScreen();
        view.render();
        $('.game').html(view.$el);
      }, 3000);
    },

    play: function(){
      var view = new MenuScreen();
      view.render();

      $('.game').html(view.$el);
      $('.game').append('<div>PLAYING A GAME</div>');

    },

    leaderboard: function(){
      var view = new MenuScreen();
      view.render();

      $('.game').html(view.$el);
      $('.game').append('<div>INCREDIBLE STATS</div>');
    },

    settings: function(){
      var view = new MenuScreen();
      view.render();

      $('.game').html(view.$el);
      $('.game').append('<div>A LOT OF OPTIONS</div>');
    },
})

new AppRouter();
Backbone.history.start();
