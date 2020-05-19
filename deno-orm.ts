import {
  BaseModel,
  Defaults,
  dso,
  Field,
  FieldType,
  Join,
  Model,
  Where
} from "https://deno.land/x/dso@v1.0.0/mod.ts";


// Define a database model
@Model("users")
class UserModel extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id: number;

  @Field({ type: FieldType.STRING, length: 30 })
  name: string;
}

const userModel = dso.define(UserModel);

dso.connect({
  hostname: Deno.env.get("MYSQL_HOST"),
  port: 3306,
  username: Deno.env.get("MYSQL_USER"),
  password: Deno.env.get("MYSQL_PASS"),
  db: "deno"
});

// When installing or initializing a database,
// you can use dso.sync to synchronize the database model to the database.

// await dso.sync(false);

// You can add records using insert method
const insertId = userModel.insert({
  name: "user1"
});

// You can use the Model.findById method to get a record
const user = userModel.findById(1);