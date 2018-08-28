const agentRoutes = require('./routes');
module.exports = function(app, db) {
  agentRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов 
};