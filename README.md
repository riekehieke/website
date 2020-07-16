<br>
<br>

<h1 align="center">Portfolio-Website of Rieke Helmers</h1>

<img src="https://user-images.githubusercontent.com/30436310/86271482-3b8ce280-bbcd-11ea-977f-47da34962ec2.jpg">

This is my personal portfolio-website, available at <a href="https://riekehelmers.com" target="_blank">https://riekehelmers.com</a>.

---

Built with <a href="https://getkirby.com" target="_blank">Kirby CMS</a>.

---

## Instructions

#### Clone the repo

`> git clone --recurse-submodules https://github.com/riekehieke/website`

> If you clone the repo without `--recurse-submodules`, run `git submodule update --init --recursive` in the project dir.

#### Development

`> npm start` – requires PHP >= 7.3 (with `curl`, `ctype`, `mbstring` and `gd`) and `imagemagick` to be installed

or using `docker-compose`:

`docker-compose up -d` – also set `PHP_UID` and `PHP_GID` env variables if the owner of `./src` is different than `1000:1000`

> Then visit [`localhost:8080`](http://localhost:8080) (or [`localhost:8080/panel`](http://localhost:8080/panel) for the admin panel) 👍🏻
