<?= snippet('head') ?>

<?= snippet('header') ?>

<?php $images = $page->gallery()->toFiles() ?>

<div class="content">
  <h1><?= $page->title()->inline() ?></h1>

  <div class="gallery">
    <?php foreach($images as $image): ?>
      <?php if ($image->height() > $image->width()): ?>
      <div class="gallery__img-container gallery__img-container--portrait">
        <picture>
          <source sizes="30vw" srcset="<?= $image->srcset('avif') ?>" type="image/avif">
          <source sizes="30vw" srcset="<?= $image->srcset('webp') ?>" type="image/webp">
          <img
            id="thumb-img-<?= $image->indexOf() ?>"
            alt="<?= $image->alt() ?>"
            src="<?= $image->resize(900)->url() ?>"
            width="<?= $image->resize(900)->width() ?>"
            height="<?= $image->resize(900)->height() ?>"
            loading="lazy"
            decoding="async"
            sizes="30vw"
            srcset="<?= $image->srcset() ?>"
          />
        </picture>
      </div>
      <?php else: ?>
      <div class="gallery__img-container gallery__img-container--landscape">
        <picture>
          <source sizes="65vw" srcset="<?= $image->srcset('crop-avif') ?>" type="image/avif">
          <source sizes="65vw" srcset="<?= $image->srcset('crop-webp') ?>" type="image/webp">
          <img
            id="thumb-img-<?= $image->indexOf() ?>"
            alt="<?= $image->alt() ?>"
            src="<?= $image->crop(1200, 800)->url() ?>"
            width="<?= $image->crop(1200, 800)->width() ?>"
            height="<?= $image->crop(1200, 800)->height() ?>"
            loading="lazy"
            decoding="async"
            sizes="65vw"
            srcset="<?= $image->srcset('crop') ?>"
          />
        </picture>
      </div>
      <?php endif ?>
    <?php endforeach ?>
  </div>

  <?php foreach($images as $image): ?>
    <div class="lightbox" id="<?= "lightbox-for-thumb-img-{$image->indexOf()}" ?>">
    <picture>
      <source sizes="90vw" srcset="<?= $image->srcset('avif') ?>" type="image/avif">
      <source sizes="90vw" srcset="<?= $image->srcset('webp') ?>" type="image/webp">
      <img
        alt="<?= $image->alt()?>"
        src="<?= $image->resize(1200)->url() ?>"
        width="<?= $image->resize(1200)->width() ?>"
        height="<?= $image->resize(1200)->height() ?>"
        loading="lazy"
        decoding="async"
        sizes="90vw"
        srcset="<?= $image->srcset() ?>"
      />
    </picture>
    </div>
  <?php endforeach ?>

  <div class="video-editor-container">
    <div class="video-container <?= r($page->video()->isEmpty(), 'video-container--empty') ?>">
      <?php if ($page->video()->isNotEmpty()): ?>
        <?= video($page->video()) ?>
      <?php endif ?>
    </div>

    <div class="editor"><?= $page->text()->toBlocks() ?></div>
  </div>

  <div class="time">
    <p><?= $page->date()->inline() ?></p>
  </div>
</div>

<?= snippet('foot') ?>
