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
        <?php if ($project->projectThumbnail()->isNotEmpty()): ?>
          <img
            src="<?= $project->projectThumbnail()->toFile()->thumb(['width' => 1200])->url() ?>"
            alt=""
            class="thumbnail__img"
          />
        <?php endif ?>
      </div>

      <a class="thumbnail__link" href="<?= $project->url() ?>" class="router">
        <span><?= $project->title()->inline() ?></span>
      </a>
    </div>
  <?php endforeach ?>
</div>
