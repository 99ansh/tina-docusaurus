import { createDatabase } from "@tinacms/datalayer"
import { MongodbLevel } from "mongodb-level"
import { myGitProvider } from "./myGitProvider.ts"

export default createDatabase({
    gitProvider: new myGitProvider({
      branch: "",
      owner: "",
      repo: "",
      token: "",
    }),
    databaseAdapter: new MongodbLevel({
      collectionName: "main",
      dbName: "tinacms",
      mongoUri: ""
    }),
  });
