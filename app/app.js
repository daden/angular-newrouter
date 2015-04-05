angular.module('app', ['ngNewRouter','app.home','app.about','app.subhome'])
  .controller('AppController', ['$router', AppController]);


function AppController ($router) {

	console.log("$router", $router)
	$router.config([{
      path: '/',
      components: {
        'default': 'home'
      }
  	}
    //, {
    //  path: '/',
    //  components: {
    //    'default': 'home',
    //    'about': 'home'
    //  }
    //}
    //, {
    //  path: 'home',
    //  components: {
    //    'default': 'home',
    //    'about': 'home'
    //  }
    //}, {
    //  path: 'about',
    //  components: {
    //    'default': 'about',
    //    'about': 'about'
    //  }
    //}
	]);

}