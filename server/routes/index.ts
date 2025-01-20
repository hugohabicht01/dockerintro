export default defineEventHandler((event) => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const currentTime = `${hours}:${minutes}:${seconds}`;

  return `<html>
    <body>
      <h1>Welcome to my page!</h1>
      <p>This is served from a custom nodejs based backend</p>
      <button hx-get="/api/random" hx-target="#response-target">Fetch random data from backend</button>
      <div id="response-target">
        <p>This is just a static text</p>
      </div>
      <br>
      <p>Current time on server, generated on the server on page load: ${currentTime}</p>

      
      <br>
      <br>
      <i>Powered by nitro and htmx</i>
      <script src="https://unpkg.com/htmx.org@2.0.4"></script>
    </body>
  </html>`;
});
