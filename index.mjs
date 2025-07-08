import path from "node:path";
import { fileURLToPath } from "node:url";

export function getDirname(metaUrl) {
  if (!metaUrl || !metaUrl.startsWith('('file://')) {
    throw new Error('getDirname requires import.meta.url in ES Modules');
  }
  return path.dirname(fileURLToPath(metaUrl));
}