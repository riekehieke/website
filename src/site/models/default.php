<?php

class DefaultPage extends Page {
  public function meta_description() {
    $excerpt = new Field(null, '', parent::text()->toBlocks()->excerpt());
    return parent::meta_description()->or($excerpt);
  }
}
