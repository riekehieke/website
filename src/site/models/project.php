<?php

use Kirby\Cms\Field;
use Kirby\Cms\Page;

class ProjectPage extends Page {
  public function meta_description() {
    return parent::content()->get('meta_description')->or(new Field(null, '', parent::text()->toBlocks()->excerpt()));
  }
  public function meta_image() {
    return parent::content()->get('meta_image')->or(parent::projectThumbnail());
  }
  public function og_image() {
    return parent::content()->get('og_image')->or(parent::projectThumbnail());
  }
  public function twitter_image() {
    return parent::content()->get('twitter_image')->or(parent::projectThumbnail());
  }
}