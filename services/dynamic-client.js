import 'dotenv/config'
import { DynamicsWebApi } from 'dynamics-web-api';
import * as MSAL from '@azure/msal-node';

//OAuth Token Endpoint (from your Azure App Registration)
const authorityUrl = `${process.env.OAUTH_AUTHORITY_HOST_URL}${process.env.OAUTH_TENANT}`;

/** @type {import('@azure/msal-node').Configuration */
const msalConfig = {
  auth: {
    authority: authorityUrl,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    knownAuthorities: ['login.microsoftonline.com']
  }
}

const cca = new MSAL.ConfidentialClientApplication(msalConfig);
const serverUrl = 'https://ea-fish-devsandbox.crm4.dynamics.com';

//function that acquires a token and passes it to DynamicsWebApi
const acquireToken = async () => {
  try {
    return cca.acquireTokenByClientCredential({
      scopes: [process.env.OAUTH_SCOPE],
    });
  }
  catch (error) {
    //error logging here
    //or a fallback authentication

    //to abort a request just return null
    //or re-throw an error
    console.log(error)
    return null;
  }
}

export const dynamicsClient = new DynamicsWebApi({
  serverUrl: serverUrl,
  onTokenRefresh: acquireToken
})

// try {
//   //call any function
//   const response = await dynamicsWebApi.callFunction("WhoAmI");
//   console.log(`Hello from Dynamics 365! My id is: ${response.UserId}`);
// }
// catch (error) {
//   console.log(error);
// }