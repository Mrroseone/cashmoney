Template.projectSubmit.events({
'submit form': function(e) {
e.preventDefault();
var project = {
name: $(e.target).find('[name=projectname]').val(),
jobNumber: $(e.target).find('[name=jobnumber]').val()
};

project._id = ProjectList.insert(project);
Router.go('/project');

}
});