const { EventEmitter } = require("events");
const App = new EventEmitter();
const getClient = require("../helpers/graphqlClient");
const registerClient = require("../helpers/registerClient");
const gql = require("graphql-tag");
module.exports = (address, port, clientId) => {
  console.log("Starting app...");

  // Create the client singleton
  const graphqlClient = getClient(address, port, clientId);

  // Register this app with Thorium as a client
  registerClient();

  console.log("Registered Client");

  graphqlClient
    .query({
      query: gql`
        query Keyboard {
          keyboard {
            name
            id
          }
        }
      `
    })
    .then(({ data }) => {
      console.log(data);
    });

  // Grab the client object to instantiate it
  const client = require("./client");

  App.on("clientChange", clientObj => {
    // Do something with the client when it changes.
    // For example, start or stop performing actions when a simulator is assigned or unassigned
  });
};

module.exports.App = App;
