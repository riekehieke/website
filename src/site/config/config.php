<?php

use Kirby\Http\Server;
use Kirby\Toolkit\I18n;

$is_dev = Server::host() === 'localhost' && Server::port() === 8080;

/**
 * The config file is optional. It accepts a return array with config options
 * Note: Never include more than one return statement, all options go within this single return array
 * In this example, we set debugging to true, so that errors are displayed onscreen.
 * This setting must be set to false in production.
 * All config options: https://getkirby.com/docs/reference/system/options
 */
return [
    'production' => !$is_dev,
    'debug' => $is_dev,
    'thumbs' => ['driver' => 'im'],
    'bvdputte.fingerprint.query' => true,
    'hooks' => [
      'route:after' => function () {
        I18n::$locale = 'de';
      },
    ],
    'routes' => [
        // Redirect old /detail?project=<slug> style URLs to new /projects/<slug> URLs
        [
        'pattern' => '/detail',
        'action' => function() {
            $query = Url::query();

            $match = preg_match('/^project=([^&\/]+)/', $query, $matches);
            $slug = $matches[1];

            if ($page = page('projects')->find($slug)) {
                go($page->url());
            } else {
                $this->next();
            }
        }
        ]
    ],
    'languages' => true
];
