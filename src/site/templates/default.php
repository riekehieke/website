<?= snippet('head') ?>
<?= snippet('header') ?>

<div class="content">
  <?= $page->text()->toBlocks() ?>
</div>