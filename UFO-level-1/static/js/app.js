
var tableData = data;

let tbody = d3.select("tbody");
//console.log(tbody);

function poptable(data) {
    tbody.html("");
    data.forEach((item) => {
    var row = tbody.append("tr");
    Object.values(item).forEach((value)=> {
        var cell = row.append("td");
        cell.text(value);
        })
    })
};

poptable(tableData);

function filter() {
    d3.event.preventDefault();
    var f_date = d3.select("#datetime").property("value");
    var filterdata = tableData;
    if (f_date) {
        filterdata = filterdata.filter(item=>item.datetime === f_date);
    }
poptable(filterdata);
};

d3.selectAll("#filter-btn").on("click", filter);
