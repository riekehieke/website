<?= snippet('head') ?>

<?= snippet('header') ?>

<?php $images = $page->gallery()->toFiles() ?>

<div class="content">
  <h1><?= $page->title()->inline() ?></h1>

  <div class="gallery">
    <?php foreach($images as $image): ?>
      <?php if ($image->height() > $image->width()): ?>
      <div class="gallery__img-container gallery__img-container--portrait">
        <?= $image->thumb(['width' => 900])->html(['id' => 'img-' . $image->indexOf()]) ?>
      </div>
      <?php else: ?>
      <div class="gallery__img-container gallery__img-container--landscape">
        <?= $image->crop(1200, 800)->html(['id' => 'img-' . $image->indexOf()]) ?>
      </div>
      <?php endif ?>
    <?php endforeach ?>
  </div>

  <?php foreach($images as $image): ?>
    <div class="lightbox" id="<?= 'img-' . $image->indexOf() . '-l' ?>">
      <img src="<?= $image->url() ?>" />
    </div>
  <?php endforeach ?>

  <div class="video-editor-container">
    <div class="video-container <?= e($page->video()->isEmpty(), 'video-container--empty') ?>">
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
