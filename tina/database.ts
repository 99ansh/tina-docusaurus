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
      mongoUri: "mongodb://99ansh:qxoaEuNOvcXbsTxL@ac-wdtzm8v-shard-00-00.samolpm.mongodb.net:27017,ac-wdtzm8v-shard-00-01.samolpm.mongodb.net:27017,ac-wdtzm8v-shard-00-02.samolpm.mongodb.net:27017/?ssl=true&replicaSet=atlas-zda0w4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    }),
  });