<?php

/**
 * The config file is optional. It accepts a return array with config options
 * Note: Never include more than one return statement, all options go within this single return array
 * In this example, we set debugging to true, so that errors are displayed onscreen.
 * This setting must be set to false in production.
 * All config options: https://getkirby.com/docs/reference/system/options
 */
return [
    'url' => ['https://riekehelmers.com', 'http://localhost:8080'],
    'production' => true,
    'debug' => false,
    'bvdputte.fingerprint.query' => true,
    'languages' => true,
    'languages.detect' => true,
    'cache' => [
        'pages' => [
            'active' => true
        ]
    ],
    'diesdasdigital.meta-knight' => [
      'siteTitleAsHomePageTitle' => true,
    ],
    'thumbs' => [
        'driver' => 'im',
        'srcsets' => [
            'default' => [
                '600w'  => ['width' => 600],
                '900w'  => ['width' => 900],
                '1200w' => ['width' => 1200],
                '1800w' => ['width' => 1800],
                '2400w' => ['width' => 2400],
                '3000w' => ['width' => 3000]
            ],
            'crop' => [
                '600w'  => ['width' => 600, 'height' => 400, 'crop' => 'center'],
                '900w'  => ['width' => 900, 'height' => 600, 'crop' => 'center'],
                '1200w' => ['width' => 1200, 'height' => 800, 'crop' => 'center'],
                '1800w' => ['width' => 1800, 'height' => 1200, 'crop' => 'center'],
                '2400w' => ['width' => 2400, 'height' => 1600, 'crop' => 'center'],
                '3000w' => ['width' => 3000, 'height' => 200, 'crop' => 'center']
            ],
            'avif' => [
                '600w'  => ['width' => 600, 'format' => 'avif'],
                '900w'  => ['width' => 900, 'format' => 'avif'],
                '1200w' => ['width' => 1200, 'format' => 'avif'],
                '1800w' => ['width' => 1800, 'format' => 'avif'],
                '2400w' => ['width' => 2400, 'format' => 'avif'],
                '3000w' => ['width' => 3000, 'format' => 'avif']
            ],
            'crop-avif' => [
                '600w'  => ['width' => 600, 'height' => 400, 'crop' => 'center', 'format' => 'avif'],
                '900w'  => ['width' => 900, 'height' => 600, 'crop' => 'center', 'format' => 'avif'],
                '1200w' => ['width' => 1200, 'height' => 800, 'crop' => 'center', 'format' => 'avif'],
                '1800w' => ['width' => 1800, 'height' => 1200, 'crop' => 'center', 'format' => 'avif'],
                '2400w' => ['width' => 2400, 'height' => 1600, 'crop' => 'center', 'format' => 'avif'],
                '3000w' => ['width' => 3000, 'height' => 200, 'crop' => 'center', 'format' => 'avif']
            ],
            'webp' => [
                '600w'  => ['width' => 600, 'format' => 'webp'],
                '900w'  => ['width' => 900, 'format' => 'webp'],
                '1200w' => ['width' => 1200, 'format' => 'webp'],
                '1800w' => ['width' => 1800, 'format' => 'webp'],
                '2400w' => ['width' => 2400, 'format' => 'webp'],
                '3000w' => ['width' => 3000, 'format' => 'webp']
            ],
            'crop-webp' => [
                '600w'  => ['width' => 600, 'height' => 400, 'crop' => 'center', 'format' => 'webp'],
                '900w'  => ['width' => 900, 'height' => 600, 'crop' => 'center', 'format' => 'webp'],
                '1200w' => ['width' => 1200, 'height' => 800, 'crop' => 'center', 'format' => 'webp'],
                '1800w' => ['width' => 1800, 'height' => 1200, 'crop' => 'center', 'format' => 'webp'],
                '2400w' => ['width' => 2400, 'height' => 1600, 'crop' => 'center', 'format' => 'webp'],
                '3000w' => ['width' => 3000, 'height' => 200, 'crop' => 'center', 'format' => 'webp']
            ],
        ]
    ],
    'routes' => [
        // Redirect old /detail?project=<slug> style URLs to new /projects/<slug> URLs
        [
            'pattern' => '/detail',
            'action' => function() {
                $query = Kirby\Cms\Url::query();

                $match = preg_match('/^project=([^&\/]+)/', $query, $matches);
                $slug = $matches[1];

                if ($page = page('projekte')->find($slug)) {
                    go($page->url());
                } else {
                    $this->next();
                }
            }
        ],
    ]
];
