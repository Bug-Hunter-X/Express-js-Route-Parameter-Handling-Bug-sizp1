const express = require('express');
const app = express();

function validateUserId(req, res, next) {
  const userId = req.params.id;
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  req.userId = parseInt(userId); //Store validated ID
  next();
}

app.get('/users/:id', validateUserId, (req, res) => {
  const userId = req.userId; 
  // ... some database query to find user with userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});