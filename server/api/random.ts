export default defineEventHandler((event) => {
  return `<p>This random number was generated on the server: ${Math.floor(Math.random() * 100)}</p>`;
});
