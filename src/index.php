<?php
// until upgrade to v3.7
if ($_SERVER['SERVER_NAME'] === 'riekehelmers.com') {
   $_SERVER['HTTPS'] = true;
}
require __DIR__ . '/kirby/bootstrap.php';

$kirby = new Kirby([
  'roots' => [
    'license' => __DIR__ . '/site/license/.license',
  ]
]);

echo $kirby->render();
