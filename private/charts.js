Template.overview.rendered = function() { 
    
     var myArray = ProjectList.find().fetch();
        console.log(myArray);
 
        var distinctArray = _.uniq(myArray, false, function(d) {return d.amount});
        console.log(distinctArray);

        var disctinctValues = _.pluck(distinctArray, 'amount');
        console.log(Hallo);


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

        //ein Loop der Arrays ausgibt


        [{
            name: 'Lufthansa',
            data: [50000]
        },
        {
            name: 'BBDO',
            data: [24000]
        },

        {
            name: 'Bayer',
            data: [16000]
        },

         {
            name: 'EOn',
            data: [120000]
        }]
    });
};
