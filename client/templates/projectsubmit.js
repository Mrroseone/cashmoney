Template.projectSubmit.events({
'submit form': function(e) {
e.preventDefault();
var project = {

jobNumber: $(e.target).find('[name=jobnumber]').val(),
client: $(e.target).find('[name=name]').val(),
amount: $(e.target).find('[name=amount]').val()
};

project._id = ProjectList.insert(project);
Router.go('/project');

}
});