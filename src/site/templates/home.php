<?= snippet('head') ?>
<?= snippet('header') ?>

<?php
$projectPage = page('projekte');
$projects = $projectPage ? $projectPage->children()->listed() : pages([]);
?>

<div class="projects" id="projects">
  <?php foreach($projects as $project): ?>
    <div class="thumbnail">
      <div class="thumbnail__img-container">
        <?php if ($image = $project->projectThumbnail()->toFile()): ?>
          <picture>
            <source
              sizes="(min-width: 768px) <?= r($project->indexOf(), '30vw', '60vw')?>, 100vw"
              srcset="<?= $image->srcset('thumb-avif') ?>"
              type="image/avif"
            >
            <source
              sizes="(min-width: 768px) <?= r($project->indexOf(), '30vw', '60vw')?>, 100vw"
              srcset="<?= $image->srcset('thumb-webp') ?>"
              type="image/webp"
            >
            <img
              class="thumbnail__img"
              alt="<?= $image->alt() ?>"
              src="<?= $image->resize(1200)->url() ?>"
              width="<?= $image->resize(1200)->width() ?>"
              height="<?= $image->resize(1200)->height() ?>"
              <?= r($project->indexOf(), 'loading="lazy"') ?>
              decoding="async"
              sizes="(min-width: 768px) <?= r($project->indexOf(), '30vw', '60vw')?>, 100vw"
              srcset="<?= $image->srcset('thumb') ?>"
            />
          </picture>
        <?php endif ?>
      </div>

      <a class="thumbnail__link" href="<?= $project->url() ?>">
        <span><?= $project->title()->inline() ?></span>
      </a>
    </div>
  <?php endforeach ?>
</div>

<?= snippet('foot') ?>
