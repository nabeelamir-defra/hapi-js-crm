# HapiJS CRM Connection Example

A simple Hapi project that connects to CRM using the @azure/msal-node library for authentication and dynamics-web-api library to make queries to CRM.

## Prequisites

- Node 18

## Installation

```
npm i
```

Copy .example.env and rename it to .env. Replace the variables, the values are the same as the environment variables in the sales-api.

## Run

```
npm start
```

Visit the url below with the full licence number of a permission in CRM
http://localhost/licence?fullLicenceNumber=ABCD-1234-EFGH-5678
