import { insertNewEntry } from "~/utils/firestore";

export default defineEventHandler(async (event) => {
  const formData = await readFormData(event);
  const name = formData.get("name").toString();
  const message = formData.get("message").toString();

  await insertNewEntry({ name, message });

  return sendRedirect(event, "/", 302);
});
