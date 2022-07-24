<?= snippet('head') ?>
<?= snippet('header') ?>

<div class="content">
  <h1><?= $page->title() ?></h1>
  <?= $page->text()->toBlocks() ?>
</div>

<?= snippet('foot') ?>