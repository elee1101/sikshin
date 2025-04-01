import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const file = join(process.cwd(), "server", "db.json");

export async function readFavorites() {
  const data = await readFile(file, "utf-8");
  return JSON.parse(data).favorites;
}

export async function writeFavorites(favorites) {
  const data = { favorites };
  await writeFile(file, JSON.stringify(data, null, 2));
}
