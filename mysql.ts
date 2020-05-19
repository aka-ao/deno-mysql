import { Client } from "https://deno.land/x/mysql/mod.ts";
const client = await new Client().connect({
  hostname: Deno.env.get("MYSQL_HOST"),
  port: 3306,
  username: Deno.env.get("MYSQL_USER"),
  password: Deno.env.get("MYSQL_PASS"),
  db: "deno"
});

let result = await client.execute(`INSERT INTO users(name) values(?)`, [
  "manyuanrong",
]);
console.log(result);