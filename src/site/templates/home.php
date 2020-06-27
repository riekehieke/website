<?= snippet('head') ?>
<?= snippet('header') ?>

<?php
$projectPage = page('projects');
$projects = $projectPage ? $projectPage->children()->listed() : pages([]);
?>

<div class="projects" id="projects">
  <?php foreach($projects as $index => $project): ?>
    <div class="thumbnail <?= 'thumbnail--' . $index ?>">
      <a href="<?= $project->url() ?>" class="router">
        <?php if ($project->projectThumbnail()->isNotEmpty()): ?>
          <img src="<?= $project->projectThumbnail()->toFile()->url() ?>" alt="" class="image" />
        <?php endif ?>
        <p>
          <?= $project->title()->inline() ?>
        </p>
      </a>
    </div>
  <?php endforeach ?>
</div>
