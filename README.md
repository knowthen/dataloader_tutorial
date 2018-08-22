# Source code for Tutorial on Facebooks DataLoader

You can checkout this free tutorial at: [knowthen.com/dataloader](https://knowthen.com/dataloader)

Want to learn more about GraphQL? Checkout my course: [knowthen.com/graphql](https://knowthen.com/graphql)

## How do I set this up?

1. Create a postgres database (>= 9.5) `createdb hackerbook`
2. Run the following script, to create the schema and load some data. **Make sure** you replace dbuser and secretpassword with your credentials. `psql -f ./createdb.sql postgres://dbuser:secretpassword@localhost:5432/hackerbook`

3. rename `example.env` to `.env`, then set database username and password in the `.env` file
4. Install dependancies `npm install`
5. Run server `npm start`
