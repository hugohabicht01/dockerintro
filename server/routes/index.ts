export default defineEventHandler(async (event) => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const currentTime = `${hours}:${minutes}:${seconds}`;

  const htmlTemplate = await useStorage('assets:server').getItem(`time.html`)
  const rendered = htmlTemplate.toString().replace("$TIME", currentTime);


  return rendered;
});
