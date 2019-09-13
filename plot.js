// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.

let citydata = top15Cities;


// 2. Use filter() to pass the function as its argument

let targetpop = 0;
d3.select("#input").on("change", function() {
targetpop = d3.select("#input").property("value");

} )

let targetpop = d3.select("#input").text();

filteredcities = citydata.filter((item) => item.Increase_from_2016 > targetpop);
console.log(filteredcities);


// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.


// 3. Use the map method with the arrow function to return all the filtered cities' names.

cityname = filteredcities.map((item) => item.City);
console.log(cityname);



//  Check your filtered cities


// 4. Use the map method with the arrow function to return all the filtered cities' populations.

population = filteredcities.map((item) => item.population);
console.log(population);


//  Check the populations of your filtered cities

// 5. Create your trace.

trace = {
x: cityname,
y: population,
type: "bar"

};

let data = [trace];

let layout = {
  title: "'City Population'"
};

Plotly.newPlot("bar-plot", data, layout);


// 6. Create the data array for our plot


// 7. Define our plot layout


// 8. Plot the chart to a div tag with id "bar-plot"



// trace = {
// type: 'scattergeo',
// locations = ['AZ', 'LA', 'VA', 'TX'], 
// locationmode = 'USA-states',
// colorscale = 'Viridis',
// z = population

// };

// layout = {geo:{scope:'usa'}};
// fig = {data: [trace], layout:layout};
// Plotly.newPlot("bar-plot", fig);