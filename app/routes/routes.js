module.exports = function(app, db) {
  
  var ObjectID = require('mongodb').ObjectID;
    app.get('/agents/:id', (req, res) => {
      const id = req.params.id;
      const details = { '_id': new ObjectID(id) };
      db.collection('agents').findOne(details, (err, item) => {
        if (err) {
          res.send({'error':'An error has occurred'});
        } else {
          res.send(item);
        } 
      });
    });

  app.post('/agents', (req, res) => {
      const agent = { text: req.body.body, title: req.body.title };
      db.collection('agents').insert(agent, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });

  app.delete('/agents/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('agents').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });

  app.put ('/agents/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const agent = { text: req.body.body, title: req.body.title };
    db.collection('agents').update(details, agent, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(agent);
      } 
    });
  });

  app.get('/agents/', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('agents').find({}).toArray( (err, result) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(result);
      } 
    });
  });
};