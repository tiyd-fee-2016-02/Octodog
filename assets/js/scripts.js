
$(function () {
  'use strict';

$('.tabList').each(function(){ //iterate though
  var $this = $(this); // current tab
  var $tab = $this.find('li.active'); // currently active tab
  var $link = $tab.find('a');   // link of active tab
  var $panel = $($link.attr('href')); // active panel

  $this.on('click', '.tab-control', function(event) { //create a function of when you click on the tab, hide the others
    event.preventDefault();   // prevent default behavior
    var $link = $(this);      // store link
    var id = this.hash;       // get the href of the clicked tab

    if (!$link.is('.active')){   //if the link is not active
      $panel.removeClass('active');    // make panel inactive
      $tab.removeClass('active');      // make the tab inactive

      $panel = $(id).addClass('active'); //make panel active
      $tab = $link.parent().addClass('active'); // make tab active
    }
  });
});

/********************** lodash ****************************/

$.getJSON('https://api.github.com/users/octocat', function(json){
    var name = _.template('<%- m.login %>', {variable: 'm'});
    var render = name({login: json.login});
    $(".name").html(render);

});





});
