// Create a MongoDB Collection
ProjectList = new Mongo.Collection('projects');
User = new Mongo.Collection('user');



// Code that only runs on the client (within the web browser)
if(Meteor.isClient){

Meteor.subscribe('theProject');

// Template.chart.rendered = function() {
//     //Get the context of the canvas element we want to select
//     // JS

//         myArray = ProjectList.find().fetch();
//         console.log(myArray);
 
//         distinctArray = _.uniq(myArray, false, function(d) {return d.amount});
//         console.log(distinctArray);

//         disctinctValues = _.pluck(distinctArray, 'amount');
//         return disctinctValues;
//         // console.log(disctinctValues);
        
// },
  
  // Helper functions execute code within templates
  Template.project.helpers({
    'client': function(){

        // Retrieve all of the data from the "PlayersList" collection
          return ProjectList.find().fetch()

    }
  });
}



// // Code that only runs on the server (where the application is hosted)
if(Meteor.isServer){

Meteor.publish('theProject', function(){
    return ProjectList.find();
    // return ProjectList.find().fetch()

});

}

