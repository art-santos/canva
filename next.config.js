/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    disable:
<<<<<<< HEAD

      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "preview" ||
=======
>>>>>>> f4e17f93dd98b9f8ee55d03d8d95342fb5e63be5
      process.env.NODE_ENV === "production",
      // delete two lines above to enable PWA in production deployment
      // add your own icons to public/manifest.json 
      // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
    dest: "public",
    register: true,
  },
  reactStrictMode: true,
});
