angular.module('app.home', ['ngNewRouter'])
  .controller('HomeController', ['$router', function ($router) {
    this.name = 'Friend from home';

    //console.log("$router", $router)
    //
    //$router.config([{
    //  path:'/subhome',
    //  components: {
    //    'default': 'subhome'
    //  }
    //}])


  }]);