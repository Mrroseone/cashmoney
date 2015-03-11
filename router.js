Router.configure({
layoutTemplate: 'layout',
notFoundTemplate: 'notFound',
loadingTemplate: 'loading',
});



Router.route('/', {name: 'home'});

Router.route('/project', {name: 'project'});

Router.route('/overview', {name: 'overview'});

Router.route('/new-project', {name: 'projectSubmit'});


Router.route('/project/:jobNumber', {
name: 'singleproject',
data: function() { return ProjectList.findOne({jobNumber: this.params.jobNumber});
}
});

var requireLogin = function() {
if (! Meteor.user()) {
if (Meteor.loggingIn()) {
this.render(this.loadingTemplate);
} else {
this.render('signup');
}
} else {
this.next();
}
}

Router.onBeforeAction(requireLogin, {only: ['project', 'singleproject', 'overview']});