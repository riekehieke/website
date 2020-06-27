<?= snippet('head') ?>
<?= snippet('header') ?>

<div class="content">
  <?= $page->text()->blocks() ?>
</div>