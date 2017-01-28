console.log("linear regression");
$(document).ready(function(){
    var margin = {top: 20, right: 20, bottom: 20, left: 40};
    var width = 500 - margin.left - margin.right;
    var height = 250 - margin.top - margin.bottom;

    var xScale = d3.scale.linear()
        .domain([0, 20])
        .range([0, width]);

    var yScale = d3.scale.linear()
        .domain([0, 10])
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .innerTickSize(-height)
        .tickPadding(10);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .tickValues([0,2,4,6,8,10])
        .orient("left")
        .innerTickSize(-width)
        .outerTickSize(0)
        .tickPadding(10);

    var svg = d3.select("div.vis-container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    var g = svg.append('g');

    // Data.
    var trainingPoints = [
        [2,3],
        [4,5],
        [6,3],
        [8,5],
        [10,7],
        [12,8],
        [14,8],
        [16,9],
        [18,7]
    ];

    var xCoords = [2,4,6,8,10,12,14,16,18];

    var lineEnds = {
        start: {x: 0, y: 3, type: 'start'},
        finish: {x: 20, y: 6, type: 'finish'} 
    };

    var lineData = [lineEnds.start, lineEnds.finish];

    function getHypLineCoordinates(xCoords, start, finish) {
        var slope = (finish.y - start.y) / (finish.x - start.x);
        var yIntercept = start.y - (slope * start.x); 
 
        return xCoords.map(function(xCoord) {
            var yCoord = slope * xCoord + yIntercept;
            return [xCoord, yCoord];
        });
    }

    var hypLineCoords = getHypLineCoordinates(xCoords, lineEnds.start, lineEnds.finish); 

    // Draw.
    // Training table.
    var table = d3.select('.vis-table').append('table');
    var thead = table.append('thead');
    var tbody = table.append('tbody');

    var columns = ['Radiation (Rads)','Super Power (Watts)'];
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
            .text(function(column) { return column; });

    var rows = tbody.selectAll("tr")
        .data(trainingPoints)
        .enter()
        .append("tr");

    var cells = rows.selectAll("td")
        .data(function(row,i){
            return trainingPoints[i];
        })
        .enter()
        .append("td")
        .html(function(d) { return d.toFixed(2); });


    // Cost lines.
    function getCostLineCoords(trainingPoints, hypLineCoords) {
        return trainingPoints.map(function(trainingPoint, i) {
            var lineStart = [];
            lineStart.push(trainingPoint[0]);
            lineStart.push(trainingPoint[1]);

            var lineEnd = [];
            lineEnd.push(hypLineCoords[i][0]);
            lineEnd.push(hypLineCoords[i][1]);

            return {start: lineStart, end: lineEnd};
        });
    }
    
    function drawCostLineCoords(costLineCoords) {
        var costLines = g
            .selectAll('.cost-lines')
            .data(costLineCoords);
        if (costLines.empty()) {
            costLines.enter()
            .append('line')
            .attr("class", "cost-lines")
            .style('stroke', 'gray');
        }
        return costLines
            .attr('x1', function(d){return xScale(d.start[0]);})
            .attr('y1', function(d){return yScale(d.start[1]);})
            .attr('x2', function(d){return xScale(d.end[0]);})
            .attr('y2', function(d){return yScale(d.end[1]);});
    }

    var costLineCoords = getCostLineCoords(trainingPoints, hypLineCoords);
    var costLines = drawCostLineCoords(costLineCoords);


    // Training points.
    var dragTrainingCircle = d3.behavior
        .drag()
        .on("drag", function(d) {
            var ypx = d3.event.y;
            var yCoord = yScale.invert(ypx);

            var circle = d3.select(this)
            circle.data()[0][1] = yCoord;
            circle.attr("cy", d.y = ypx);

            rows.selectAll("td")
                .data(function(row,i){
                    return trainingPoints[i];
                })
                .html(function(d) {
                    return d.toFixed(2);
                });

            costLineCoords = getCostLineCoords(trainingPoints, hypLineCoords);
            costLines = drawCostLineCoords(costLineCoords);
        }).on("dragstart", function(d,i) {
            d3.select(rows[0][i]).selectAll('td').classed("dragging", true);
        }).on("dragend", function(d,i) {
            d3.select(rows[0][i]).selectAll('td').classed("dragging", false);
        });

    var trainingCircles = g
        .selectAll('.training-record')
        .data(trainingPoints)
        .enter().append("circle")
        .attr("class", "training-record")
        .attr('cx', function(d){return xScale(d[0]);})
        .attr('cy', function(d){return yScale(d[1]);})
        .attr('r', 4)
        .style('fill', 'blue')
        .call(dragTrainingCircle);

    var hypLine = g.append('line')
        .style('stroke', 'gray')
        .attr('class', 'line hypothesis')
        .attr('x1', xScale(lineEnds.start.x))
        .attr('y1', yScale(lineEnds.start.y))
        .attr('x2', xScale(lineEnds.finish.x))
        .attr('y2', yScale(lineEnds.finish.y));


    var lineCircles =  g
        .selectAll('.line-circles')
        .data(hypLineCoords)
        .enter().append('circle')
        .attr("class", 'line-circles')
        .attr('cx', function(d){return xScale(d[0]);})
        .attr('cy', function(d){return yScale(d[1]);})
        .attr('r', 3)
        .style('fill', 'red');

    function equationOfLine(start, finish) {  
        var slope = (finish.y - start.y) / (finish.x - start.x);

        var yIntercept = start.y - (slope * start.x); 

        if(slope === 0) {
            return 'y = ' + start.y;
        }

        if(slope === -Infinity || slope === Infinity){
            return 'x = ' + start.x;
        }

        return 'y = ' + d3.format(",.2f")(slope) + 'x + ' + d3.format(",.2f")(yIntercept);
    }

    var dragControls = d3.behavior
        .drag()
        .on("drag", function(d) {
            var circle = d3.select(this),
            line = d3.select('.line'),
            isStart = circle.classed('start'),
            lineY = isStart ? 'y1' : 'y2',
            yStart = d3.format(",.0f")(yScale.invert(line.attr('y1'))),
            yFinish = d3.format(",.0f")(yScale.invert(line.attr('y2')));

            line.attr(lineY, d3.event.y);
            var newYCoord = yScale.invert(d3.event.y);
            circle.data()[0][1] = newYCoord;
            circle.attr("cy", d.y = d3.event.y);

            isStart ? lineEnds.start.y = newYCoord : lineEnds.finish.y = newYCoord;
            hypLineCoords = getHypLineCoordinates(xCoords, lineEnds.start, lineEnds.finish); 
            lineCircles =  g
                .selectAll('.line-circles')
                .data(hypLineCoords)
                .attr('cy', function(d){return yScale(d[1]);})

            costLineCoords = getCostLineCoords(trainingPoints, hypLineCoords);
            costLines = drawCostLineCoords(costLineCoords)
        });

    var lineControls = g
        .selectAll('.line-controls')
        .data(lineData)
        .enter().append("circle")
        .attr('class', function(d){ return "line-controls circle " + d.type;})
        .attr('cx', function(d){return xScale(d.x);})
        .attr('cy', function(d){return yScale(d.y);})
        .attr('r', 10)
        .style('fill', 'gray')
        .call(dragControls);

    var text = g
        .selectAll('text')
        .data(lineData)
        .enter().append('text')
        .attr("x", function(d){return xScale(d.x);})
        .attr("y", function(d){return yScale(d.y + 1);})
        .attr('class', function(d) {return "text" + d.type;})
        .text( function (d) { return "( " + d.x  + ", " + d.y +" )"; })
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "red");
});
