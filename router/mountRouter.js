const eventRouter = require('./document-router/event-router');

module.exports = (app) => {
    app.use('/eventManager', eventRouter);
};
