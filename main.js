// Create a MongoDB Collection
ProjectList = new Mongo.Collection('projects');
User = new Mongo.Collection('user');


// Code that only runs on the client (within the web browser)
if(Meteor.isClient){

Template.overview.rendered = function() {
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(data,null);

  },
  // Helper functions execute code within templates
  Template.project.helpers({
    'client': function(){

        // Retrieve all of the data from the "PlayersList" collection
          return ProjectList.find()
        
    }
  });
}

// // Code that only runs on the server (where the application is hosted)
// if(Meteor.isServer){

// }

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};