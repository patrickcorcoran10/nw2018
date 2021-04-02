array = [{first: "john", last: "corcoran", DOB: "11/11/48", favFoods: ["steak", "bar food"]}, {first: "marie", last: "corcoran", DOB: "9/25/52", favFoods: ["salads", "vegatables"]},{first: "mike", last: "corcoran", DOB: "8/2/81", favFoods: ["pizza", "ramen"]}, {first: "brendan", last: "corcoran", DOB: "9/7/83", favFoods: ["indian", "sausage"]}, {first: "pat", last: "corcoran", DOB: "1/12/85", favFoods: ["rice", "shrimp"]}, {first: "colleen", last: "miles", DOB: "2/25/87", favFoods: ["tacos", "meatloaf"]}, {first: "katie", last: "reed", DOB: "12/15/89", favFoods: ["pasta", "hot dogs"]}];
// console.log(array[0].favFoods[0]);
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(array[i].favFoods[j])
        if (array[i].favFood[j] == "tacos" || "indian" || "pasta" || "ramen") {
            console.log("Foreign food Alert");
        }
    }
};
