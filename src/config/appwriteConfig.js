import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('654a87fb9323caa3258e');

    export const account = new Account(client);
    export const databases = new Databases(client);

export const PROJECT_ID = "654a87fb9323caa3258e"
export const DATABASE_ID = "654b9955df682592d49e";
export const COLLECTION_ID = "654b99629b215058310e";

