const express = require('express');
const app = express();
const port = 3000;


const data = [
  { id: 1, title: 'Example Post 1', content: 'This is the content of the first post.' },
  { id: 2, title: 'Example Post 2', content: 'Content of the second post goes here.' }
];

app.use(express.json());

app.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = data.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.content.toLowerCase().includes(query)
  );
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
fetch('path/to/data.json')
  .then(response => response.json())
  .then(data => {
    // Process your data here
  });