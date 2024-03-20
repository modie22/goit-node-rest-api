import path from "node:path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const contactsPath = path.join(__dirname, "db", "contacts.json")
