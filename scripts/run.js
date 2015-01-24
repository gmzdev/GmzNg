(function () {

  angular.module('tdl.run')

    .run(function (storage) {
      $localstorage.set('name', 'Max');
      console.log($localstorage.get('name'));
      $localstorage.setObject('post', {
        name: 'Thoughts',
        text: 'Today was a good day'
      });

      var post = $localstorage.getObject('post');
      console.log(post);
    });

})();