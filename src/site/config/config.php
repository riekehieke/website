<?php

use Kirby\Cms\BlockConverter;
use Kirby\Cms\Response;
use Kirby\Http\Server;
use Kirby\Toolkit\A;
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
    'url' => [
        'https://riekehelmers.com',
        'http://localhost:8080'
    ],
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
        ],
        [
        'pattern' => '/editor-blocks-migration',
        'action' => function() {
            if (!kirby()->user() || !kirby()->user()->isAdmin()) {
                return new Response('You need to log in as admin.', 'text/plain', 401);
            }

            $csrf = csrf();
            return "
            <!doctypehtml><meta charset=UTF-8><h1>Editor → Blocks</h1>
            <form method=POST>
              <input type=hidden name=csrf value=$csrf>
              <button>Start migration</button>
            </form>";
        }
        ],
        [
        'pattern' => '/editor-blocks-migration',
        'method' => 'POST',
        'action' => function() {
            $kirby = kirby();

            if (!$kirby->user() || !$kirby->user()->isAdmin()) {
                return new Response('You need to log in as admin.', 'text/plain', 401);
            }
            if (!csrf(get('csrf'))) {
                return new Response('Invalid token.', 'text/plain', 403);
            }

            $pages = site()->index(true);
            $updated_contents = [];

            foreach($pages as $page) {
                $block_fields = A::filter($page->blueprint()->fields(), fn($f) => $f['type'] === 'blocks');

                foreach($block_fields as $field) {
                    $name = $field['name'];

                    if (!$kirby->multilang()) {
                        if (!$page->content()->has($name)) continue;

                        $blocks = $page->content()->get($name)->toData('json');
                        $converted_blocks = BlockConverter::editorBlocks($blocks);

                        if ($blocks === $converted_blocks) continue;

                        $page->update([ $name => $converted_blocks ]);
                        $updated_contents[] = "{$page->id()} → $name";
                    } else {
                        foreach($kirby->languages() as $lang) {
                            $langCode = $lang->code();

                            if (!$page->content($langCode)->has($name)) continue;

                            $blocks = $page->content($langCode)->get($name)->toData('json');
                            $converted_blocks = BlockConverter::editorBlocks($blocks);

                            if ($blocks === $converted_blocks) continue;

                            $page->update([ $name => $converted_blocks ], $langCode);
                            $updated_contents[] = "{$page->id()} → $name ($langCode)";
                        }
                    }
                }
            }

            $count = count($updated_contents);
            return "
            <!doctypehtml><meta charset=UTF-8><h1>Editor → Blocks</h1>
            <p>Migrated $count field contents to the native blocks format.
            <ol>". r($count, '<li>') . A::join($updated_contents, '<li>') . "</ol>
            <a href={$kirby->site()->panelUrl()}>Back to the panel</a>";
        }
        ]
    ],
    'languages' => true,
    'languages.detect' => true,
];
