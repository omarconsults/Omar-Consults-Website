importScripts("https://cdn.brevo.com/js/sdk-loader.js")
const Brevo = self.Brevo // Declare the Brevo variable
Brevo.push([
  "init",
  {
    client_key: (location.search.match(/[?&]key=([^&]*)/) || [])[1],
  },
])
