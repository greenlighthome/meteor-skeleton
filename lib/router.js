Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'home',
    onAfterAction: function() {
        document.title = 'home';
    }
});