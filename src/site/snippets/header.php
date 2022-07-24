<div class="header">
      <a href="<?= $site->homePage()->url() ?>">
        <img
          src="<?= $site->logo()->toFile()->url() ?>"
          width="<?= $site->logo()->width() ?>"
          height="<?= $site->logo()->height() ?>"
          alt="rieke helmers"
          class="logo"
          id="logo_s"
        />
        <img
          src="<?= $site->logoDark()->toFile()->url() ?>"
          width="<?= $site->logoDark()->width() ?>"
          height="<?= $site->logoDark()->height() ?>"
          alt="rieke helmers"
          class="logo inactive"
          id="logo_w"
        />
      </a>
      <button class="hamburger hamburger--squeeze">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
        <span class="sr-only"><?= t('menu', 'Menü') ?></span>
      </button>
    </div>

    <div class="menu">
      <ul>
        <?php foreach($site->children()->listed() as $menuPage): ?>
          <li>
            <a href="<?= $menuPage->url() ?>">
              <?= $menuPage->title()->inline() ?>
            </a>
          </li>
        <?php endforeach ?>
      </ul>

        <div class="social-links">
          <?php foreach($site->socialLinks()->toStructure() as $link): ?>
            <a href="<?= $link->url() ?>" target="_blank" rel="noopener">
              <?= $link->name()->inline() ?>
            </a>
          <?php endforeach ?>
        </div>

        <div class="languages">
        <ul>
          <?php foreach($kirby->languages() as $language): ?>
            <li<?= r($kirby->language() == $language, ' class="active"') ?>>
              <a href="<?= $page->url($language->code()) ?>" hreflang="<?= $language->code() ?>">
                <?= html($language->name()) ?>
              </a>
            </li>
          <?php endforeach ?>
        </ul>
    </div>

        <div id="dark-light-toggle" class="hide">
          <span id="load_light"><?= t('hell', 'Hell') ?></span>
          /
          <span id="load_dark"><?= t('dunkel', 'Dunkel') ?></span>
          /
          <span id="load_auto">Auto</span>
        </div>
      </ul>
    </div>