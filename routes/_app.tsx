import { define } from "../utils.ts";

export default define.page(({ Component }) => {
  return (
    <html lang="fr" data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="EntreVoisins" />
        <link rel="stylesheet" href="/oat.min.css" />
        {/* OpenGraph */}
        <meta property="og:title" content="EntreVoisins" />
        <meta property="og:description" content="Plateforme communautaire" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <script src="/oat.min.js"></script>
        <title>EntreVoisins</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});