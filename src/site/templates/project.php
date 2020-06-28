<?= snippet('head') ?>

<?= snippet('header') ?>

<?php $images = $page->gallery()->toFiles() ?>

<div class="content">
  <h1><?= $page->title()->inline() ?></h1>

  <div class="gallery">
    <?php foreach($images as $image): ?>
      <div class="gallery__img-container <?= e($image->height() > $image->width(), 'gallery__img-container--portrait') ?>">
        <img
          src="<?= ($image->height() > $image->width()) ? $image->thumb(['width' => 900])->url() : $image->crop(1200, 800)->url() ?>"
          id="<?= 'img-' . $image->indexOf() ?>"
        />
    </div>
    <?php endforeach ?>
  </div>

  <?php foreach($images as $image): ?>
    <div class="lightbox" id="<?= 'img-' . $image->indexOf() . '-l' ?>">
      <img src="<?= $image->url() ?>" />
    </div>
  <?php endforeach ?>

  <div class="video-editor-container">
    <div class="video-container">
      <?php if ($page->video()->isNotEmpty()): ?>
        <?= video($page->video()) ?>
        <?php endif ?>
    </div>

    <div class="editor"><?= $page->text()->blocks() ?></div>
  </div>

  <div class="time">
    <p><?= $page->date()->inline() ?></p>
  </div>
</div>
