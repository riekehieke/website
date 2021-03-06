<div class="header">
      <a href="/" class="router">
        <img
          src="<?= $site->logo()->toFile()->url() ?>"
          alt="rieke helmers"
          class="logo"
          id="logo_s"
        />
        <img
          src="<?= $site->logoDark()->toFile()->url() ?>"
          alt="rieke helmers"
          class="logo inactive"
          id="logo_w"
        />
      </a>
      <button class="hamburger hamburger--squeeze">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>

    <div class="menu">
      <ul>
        <?php foreach($site->children()->listed() as $menuPage): ?>
          <li>
            <a href="<?= $menuPage->url() ?>" class="router">
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

        <div id="dark-light-toggle" class="hide">
          <span
            id="load_light"
            >hell</span
          >
          /
          <span
            id="load_dark"
            >dunkel</span
          >
          /
          <span
            id="load_auto"
            >auto</span
          >
        </div>
      </ul>
    </div>