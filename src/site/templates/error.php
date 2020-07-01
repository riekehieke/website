<?= snippet('head') ?>
<?= snippet('header') ?>

<div class="content">
  <h1><?= $page->title()->inline() ?></h1>
  <div>
    <?= $page->text()->blocks() ?>
  </div>
</div>