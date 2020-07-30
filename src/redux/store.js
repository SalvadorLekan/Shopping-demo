const { default: logger } = require("redux-logger");
const { createStore, applyMiddleware } = require("redux");
const { default: rootRedux } = require("./rootRedux");


const middlewares=[logger]

const store = createStore(rootRedux,applyMiddleware(...middlewares))
export default store