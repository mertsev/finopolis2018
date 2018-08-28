module.exports = function(app, db) {
  
  var ObjectID = require('mongodb').ObjectID;

  // Get agent info by ID
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

  // Create agent
  app.post('/agents', (req, res) => {
      const agent = { 
        name: req.body.name, 
        description: req.body.description,
        rating: 0,
        orfrating: parseInt(req.body.orf, 10),
        sparkrating: parseInt(req.body.spark, 10)
      };
      db.collection('agents').insert(agent, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });

  // Create review
  app.post('/review', (req, res) => {
      const review = { 
        reviewer: req.body.reviewer,
        agent_id: req.body.agent_id, 
        weight: parseInt(req.body.weight, 10),
        rating: parseInt(req.body.rating, 10),
        message: req.body.message
      };
      db.collection('reviews').insert(review, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
      }
    });
  });

  // Get review info by ID
  app.get('/reviews/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('reviews').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });

  
  // Delete agent by ID
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

  // Change agent info by ID
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

  // Get all agents
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