export default defineEventHandler(async (event) => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const currentTime = `${hours}:${minutes}:${seconds}`;

  const entriesHtml = renderEntries(await getEntries());


  const htmlTemplate = await useStorage("assets:server").getItem(`index.html`);
  const rendered = htmlTemplate
    .toString()
    .replace("$TIME", currentTime)
    .replace("$ENTRIES", entriesHtml.toString());

  return rendered;
});
