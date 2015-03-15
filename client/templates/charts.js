Template.overview.rendered = function() { 
    
     var myArray = ProjectList.find().fetch();
        console.log(myArray);
 
        var distinctArray = _.uniq(myArray, false, function(d) {return d.amount});
        console.log(distinctArray);

        var distinctArray2 = _.uniq(myArray, false, function(d) {return d.client});
        console.log(distinctArray2);

        var disctinctValues = _.pluck(distinctArray, 'amount');
        console.log(disctinctValues);

         var clientValues = _.pluck(distinctArray2, 'client');
        console.log(clientValues);
        console.log(clientValues[1]); 

        var arrayLength = disctinctValues.length;
        console.log(arrayLength);
        
        
        for (var i = 0; i < arrayLength; i++){

            var betrag = disctinctValues[i];
            console.log("data:" + betrag);

            console.log("name:" + clientValues[i]);

        }
   //      function test(){
   //          for (var i = 0; i < arrayLength; i++){

   //                  var dataset = { name: clientValues[i], data: disctinctValues[i]};
   //              }
   //          return dataset;    
   //      }

   // console.log(test())

    
    $('#highchart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Projekte  ']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
          series: 

        //eine Funktion
        [{
            name: clientValues[i],
            data: [betrag[i]]
        },
        {
            name: 'BBDO',
            data: [24000]
        },

        {
            name: 'kunde',
            data: [betrag]
        },

         {
            name: 'EOn',
            data: [120000]
        }]
    });
};
