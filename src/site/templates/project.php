<?= snippet('head') ?>
<?= snippet('header') ?>

<div class="content">
  <div class="details">
    <h1><?= $page->title()->inline() ?></h1>

  <div class="galerie">
    <?php foreach($page->gallery()->toFiles() as $image): ?>
      <div
        class="img"
        style="background-image: url(<?= $image->url() ?>)"
        id="<?= 'img-' . $image->indexOf() ?>"
      ></div>
      <div class="lightbox" id="<?= 'img-' . $image->indexOf() . '-l' ?>">
        <img src="<?= $image->url() ?>" />
      </div>
    <?php endforeach ?>
  </div>
  <?php if ($page->video()->url()->isNotEmpty()): ?>
     <div class="embed-container">
      <?= video($page->video()) ?>
    </div>
  <?php endif ?>
  <div>
    <?= $page->text()->blocks() ?>
  </div>

  </p>
  <div class="time">
    <p><?= $page->date()->html() ?></p>
  </div>
</div>
</div>