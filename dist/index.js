"use strict";
let user = {
    id: 1,
    username: "shehab",
    country: "Egypt"
};
user.country = "USA";
console.log(user);
function getData(data) {
    console.log(`Id is ${data.username}`);
    console.log(`Id is ${data.country}`);
}
getData({ id: 2, username: "Taher", country: "KSA" });
//# sourceMappingURL=index.js.map