// Parsing a JWT

const sampleJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im15c2VsZkBhcHBhY2FkZW15LmlvIn0.EqRikwoGyAlfvblF_FdbnQlbAQGvWZlccFnmHOVdaLg";

// #1: Splitting the JWT into 3 parts: header, payload, signature

// Your code here

const [header, payload, signature] = sampleJwt.split('.');

// #2: Decoding a JWT's header and payload
// Hint: Buffer.from(string, 'base64').toString();

// Your code here
const decodedHeader = atob(header);
const decodedPayload = atob(payload);
console.log(decodedHeader, decodedPayload)