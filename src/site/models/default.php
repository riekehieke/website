<?php

use Kirby\Cms\Field;
use Kirby\Cms\Page;

class DefaultPage extends Page {
  public function meta_description() {
    return parent::content()->get('meta_description')->or(new Field(null, '', parent::text()->toBlocks()->excerpt()));
  }
}
