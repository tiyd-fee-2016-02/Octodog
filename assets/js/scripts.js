
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
      $tab.css({ 'border-bottom': '1px solid #d8d8d8',
      'border-top': 'none',
      'border-right': 'none',
      'border-left':'none'});

      $panel = $(id).addClass('active'); //make panel active
      $tab = $link.parent().addClass('active'); // make tab active
      $tab.css({'border-bottom': '1px solid white',
                'border-top': '1px solid #d8d8d8',
                'border-right': '1px solid #d8d8d8',
                'border-left':'1px solid #d8d8d8'});
    }
  });
});

/********************** lodash ****************************/

$.getJSON('https://api.github.com/users/octocat', function(json){
// image
  var image = _.template('<image src = "<%- m.avatar_url %>">', {variable: 'm'});
  var show = image({avatar_url: json.avatar_url});
  $(".photo").html(show);

//login
    var name = _.template('<%- m.login %>', {variable: 'm'});
    var render = name({login: json.login});
    $(".name").html(render);

//name
    var fullName = _.template('<%- m.name %>', {variable: 'm'});
    var renderFullName = fullName({name: json.name});
    $(".full_name").html(renderFullName);

//company
    var company = _.template('<%- m.company %>', {variable: 'm'});
    var renderCompany = fullName({company: json.company});
    $(".company").html(renderCompany);

// email
    var email = _.template('<%- m.email %>', {variable: 'm'});
    var renderEmail = email({email: json.email});
    $(".email").html(renderEmail);

// location
    var location = _.template('<%- m.location %>', {variable: 'm'});
    var renderLocation = location({location: json.location});
    $(".location").html(renderLocation);

// blog
    var blog = _.template('<%- m.blog %>', {variable: 'm'});
    var renderBlog = blog({blog: json.blog});
    $(".blog").html(renderBlog);


// followers
  var followers = _.template('<%- m.followers %>', {variable: 'm'});
  var renderFollowers = followers({followers: json.followers});
  $("#followers").html(renderFollowers);

// starred
  // var starred = _.template('<%- m.starred_url %>', {variable: 'm'});
  // var renderStarred = starred({starred_url: json.starred_url});
  // $("#starred").html(renderStarred);

// following
  var following = _.template('<%- m.following %>', {variable: 'm'});
  var renderFollowing = following({following: json.following});
  $("#following").html(renderFollowing);


  });

// REPOSITORIES
// iterate through the array
// select the index of the object we need the info from
// get those keys
// template it
// append it to the page/make it render

// spoon-knife is index 4
// Hello-World is index 2
// hello-world is index 1
// octocat.github.io is index 3
// git-consortium is index 0

// var array = $.getJSON('https://api.github.com/users/octocat/repos');
// console.log(array);

$.getJSON('https://api.github.com/users/octocat/repos', function(repoJson){
  for(i = 0; i < repoJson.length; i++) {
    var obj = repoJson[i];
    console.log(obj.name);

    // var repoName = _.template('<%- m.name %>', {variable: 'm'});
    // var showRepo = repoName({name: repoJson[i].name});
    // $(".git-consortium").html(showRepo);
  }
});

  // console.log(array);
  // $.each(array, function(){
  // $.each(this, function (name, value){
  // was starting to like .each but NEVERMIND




});
