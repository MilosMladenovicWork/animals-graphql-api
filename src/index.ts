import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { executableSchema } from './animals/schemas/schema';

const app = express();
app.all('/graphql', createHandler({ schema: executableSchema }));

const port = 3000;

app.listen({ port });
console.log(`Listening on port: ${port}`);
