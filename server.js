//import appfile into server
const app = require("./app");

// activate dotenv package and configure
// require("dotenv").config();

// listens on port(errors or responses) and logs that server is active
app.listen(8075, () => console.log(`Litening on port 8075!`));
