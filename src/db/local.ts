import { addRxPlugin, createRxDatabase, RxDocument } from "rxdb/plugins/core";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { getRxStorageLocalstorage } from "rxdb/plugins/storage-localstorage";
import { wrappedValidateAjvStorage } from "rxdb/plugins/validate-ajv";

const id = { type: "string", maxLength: 100 };
const name = { type: "string", maxLength: 100 };

const dbConnect = async () => {
  import.meta.env.DEV && addRxPlugin(RxDBDevModePlugin);
  const db = await createRxDatabase({
    name: "exerciseDB",
    storage: wrappedValidateAjvStorage({ storage: getRxStorageLocalstorage() }),
    closeDuplicates: true,
  });
  await db.addCollections({
    bodyParts: {
      schema: {
        version: 0,
        primaryKey: "id",
        type: "object",
        properties: { id, name },
        required: ["id", "name"],
      },
    },
    exercises: {
      schema: {
        version: 0,
        primaryKey: "id",
        type: "object",
        properties: {
          id,
          name,
          bodyPart: { type: "array", uniqueItems: true, items: { type: "string" } },
        },
        required: ["id", "name", "bodyPart"],
      },
    },
    history: {
      schema: {
        version: 0,
        primaryKey: "id",
        type: "object",
        properties: {
          id,
          exerciseId: { type: "string", maxLength: 100 },
          date: { type: "string" },
          reps: { type: "number" },
          sets: { type: "number" },
          weight: { type: "number" },
        },
        required: ["id", "exerciseId", "date", "reps", "sets", "weight"],
      },
    },
  });
  return db;
};

const docsToJSON = (docs: RxDocument[]) => docs.map((doc) => doc.toJSON());

export const createObjectId = (m = Math, d = Date, h = 16, s = (s: number) => m.floor(s).toString(h)) => s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));

export const update = async (collection: string, data: any) => {
  const db = await dbConnect();
  const res: RxDocument = await db[collection].upsert(data);
  await db.close();
  return res.toJSON();
};

export const find = async (collection: string, selector: any) => {
  const db = await dbConnect();
  const res = await db[collection].find({ selector }).exec().then(docsToJSON);
  await db.close();
  return res;
};
