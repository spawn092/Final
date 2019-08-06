# Webfinal

Implement a simple Node server configured with Express to load the two views at specific routes. (2)
Connect to MongoDB using Mongoose, and define a user post schema with title - String, text - String, and reading_length - Number. (5)
Implement the form view with HTML input elements, CSS styling, jQuery, and Ajax to let users make POST request to submit new post data. (8)
Configure Express app with body-parser, define POST route and save the form data to database according to the defined Mongoose schema. (5)
Add data validation to both the Mongoose schema and HTML input fields: all fields are required and reading length must be above 1 minute. (5)
On successful addition, redirect the user to the single post view route. HINT: Use window.location.replace() (5)
Implement the individual post view with HTML, CSS styling and EJS/HTML to show the details of a single post fetched from the database. (4)
Define a GET route that takes the post ID as a param, then fetches the related post from the database and renders the single view with this data. (6)
