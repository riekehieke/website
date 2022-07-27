<?php

class ProjectPage extends Page {
  public function meta_description() {
    $excerpt = new Field(null, '', parent::text()->toBlocks()->excerpt());
    return parent::meta_description()->or($excerpt);
  }
  public function meta_image() {
    return parent::meta_image()->or(parent::projectThumbnail());
  }
  public function og_image() {
    return parent::og_image()->or(parent::projectThumbnail());
  }
  public function twitter_image() {
    return parent::twitter_image()->or(parent::projectThumbnail());
  }
}