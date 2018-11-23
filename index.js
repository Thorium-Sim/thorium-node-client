// Load up the Bonjour client
const getThoriumAddress = require("./helpers/bonjour");
const { getClient } = require("./helpers/graphqlClient");
const registerClient = require("./helpers/registerClient");
const startApp = require("./app");

// Override this with the specific name of the client you want to run.
let clientId = "Generic Node Client";
module.exports.clientId = clientId;

console.log("Activating bonjour browser...");
getThoriumAddress()
  .then(({ address, port, name }) => {
    console.log("Found Thorium server:");
    console.log(`Address: ${address}:${port}`);

    startApp(address, port, clientId);
  })
  .catch(err => {
    console.error("An error occured");
    console.error(err);
  });
