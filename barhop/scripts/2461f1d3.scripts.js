"use strict";angular.module("barhopApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/pub",{templateUrl:"views/pub.html",controller:"PubCtrl",resolve:{venues:["$http",function(a){return a.get("https://api.foursquare.com/v2/venues/search?ll=40.7,-74&ll=40.733288,-73.990978&radius=5000&categoryId=4bf58dd8d48988d11b941735&limit=50&oauth_token=AARHAGZELXXYCJ3NL2E0T0J3KWGH11KSN3MCHC4CE11JFRJX&v=20140530").then(function(a){return a.data})}]}}).otherwise({redirectTo:"/"})}]),angular.module("barhopApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma","SitePoint"]}]),angular.module("barhopApp").controller("PubCtrl",["$scope","venues",function(a,b){a.photos=[],a.name="My Pub",a.address="My Pub street NY",a.website="mypub.com",a.description="best pub ever",a.likes=10,a.venues=b,a.index=Math.floor(50*Math.random()),a.audience=Math.floor(10*Math.random())}]);