﻿requirejs.config({
    paths: {
        'text': 'durandal/amd/text'
    },
    urlArgs: 'v=1.0.0.0'
});

define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router'],
    function(app, viewLocator, system, router) {

        //>>excludeStart("build", true);
        //system.debug(true);
        //>>excludeEnd("build");

        app.title = "Cara & Niall's Wedding";

        app.start().then(function() {
            //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            viewLocator.useConvention();

            //configure routing
            router.useConvention();
            router.mapNav('home');
            router.mapNav('weddingday');
            router.mapNav('accommodation');
            router.mapNav('activities');
            router.mapNav('rsvp');
            router.mapNav('dictionary');

            //app.adaptToDevice(); 

            //Show the app by setting the root view model for our application with a transition.
            app.setRoot('viewmodels/shell', 'entrance');
        });
    });