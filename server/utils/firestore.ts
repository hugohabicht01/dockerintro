import { Firestore } from "@google-cloud/firestore";
import { nanoid } from "nanoid";

function encodeHtml(str) {
  return str.replace(/[&<>"'`]/g, function (match) {
    const escape = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "`": "&#96;",
    };
    return escape[match];
  });
}

export async function getEntries() {
  const db = new Firestore();
  const all = await db.collection("guestbook").get();
  if (all.size > 0) {
    let docs = all.docs.map((doc) => doc.data());
    return docs;
  }
  return [];
}

export function renderEntries(entries: Awaited<ReturnType<typeof getEntries>>) {
  const messages = entries.map(
    (e) => `<li><i>${e.name}</i> says<br> <i>${e.message}</i></li>`,
  );
  if (messages.length === 0) {
    return '<p>No one has written any guestbook entries yet, be the first!</p>'
  }
  const final = `<ul>${messages.join("\n")}</ul>`;
  return final;
}

type EntryType = {
  name: string;
  message: string;
};
export async function insertNewEntry(entry: EntryType) {
  const db = new Firestore();
  const newId = nanoid();
  const doc = db.doc(`guestbook/${newId}`);
  const encoded = {
    name: encodeHtml(entry.name),
    message: encodeHtml(entry.message),
  };
  await doc.set(encoded);
}
