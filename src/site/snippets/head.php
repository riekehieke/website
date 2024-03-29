<!DOCTYPE html>
<html lang="<?= $kirby->languageCode() ?>">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Meta Knight SEO -->
    <?= snippet('meta_information') ?>
    <?= snippet('robots') ?>

    <!-- Apple Web App -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <!-- Manifest -->
    <link rel="manifest" href="/assets/favicon/site.webmanifest" />
    <meta name="theme-color" property="theme" content="#fff" />
    <!-- Style Sheets -->

    <?= css(['assets/css/hamburger.css', 'assets/css/style.css', '@auto']) ?>

    <!-- favicons -->
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/assets/favicon/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/assets/favicon/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/assets/favicon/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/assets/favicon/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/assets/favicon/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/assets/favicon/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/assets/favicon/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/assets/favicon/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/assets/favicon/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/assets/favicon/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/assets/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/assets/favicon/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/assets/favicon/favicon-16x16.png"
    />

    <?= js('assets/js/index.js', true) ?>
    <script async defer data-website-id="9d577005-6d8d-4b3e-ba72-1b473ae6f381" data-domains="riekehelmers.com" src="https://copernicus.joku.co/sentinel.js"></script>
</head>
