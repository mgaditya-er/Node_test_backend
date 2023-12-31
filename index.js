const app = require('express')();
const port = 3000;

app.listen(
    port,
    () => console.log(`Server is running on port ${port}`)
);

// Path: SecondCode/index.js

app.get('/', (req, res) => {
    res.send("This is live on the internet!");
});