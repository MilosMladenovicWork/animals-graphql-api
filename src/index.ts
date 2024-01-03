import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { executableSchema } from './animals/schemas/animals.schema';

// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.all('/graphql', createHandler({ schema: executableSchema }));

const port = 3000;

app.listen({ port });
console.log(`Listening to port: ${port}`);
