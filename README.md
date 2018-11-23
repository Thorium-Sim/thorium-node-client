# Thorium React Client

A demonstration of how a Node Thorium client connects to the Thorium server
using GraphQL.

## Running

First, start up [Thorium Server](https://thoriumsim.com).

Then, start up this client:

```
npm install
npm start
```

Then, assign it to a flight and simulator.

## Steps

1. The app uses Bonjour to detect Thorium servers running on the network. It
   connects to the first detected server.
2. It registers the app as a client which can be used by Thorium.
3. It queries and subscribes to information about the client, specifically the
   assigned flight, simulator, and station.
4. Once the flight, simulator, and (optionally) station are assigned in the
   server, it triggers an event on the App object, which serves as an event
   emitter. The client can then subscribe to more specific information.

Assigning a station is optional. For example, an external client built with this
framework might only ever show a single screen or perform a single action. In
that case, it only needs access to the simulator data.

Additionally, if you want to configure this to allow the flight director to
choose between different screens, you can add those as a list of strings in
`availableCards` array in the `./helpers/registerClient.js`. These cards are
registered with the client when the client registers for the first time.
