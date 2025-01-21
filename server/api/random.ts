export default defineEventHandler((event) => {
  return `<p>This random number was generated on the server: <span style="color: red">${Math.floor(Math.random() * 100)}</span></p>`;
});
