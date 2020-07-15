FROM php:7.4-fpm-alpine3.12

ARG DEVELOPMENT

# install the intl extension and imagemagick for cropping etc.
RUN set -xe \
  && apk add --update \
  icu \
  && apk add --no-cache --virtual .php-deps \
  make \
  && apk add --no-cache --virtual .build-deps \
  $PHPIZE_DEPS \
  zlib-dev \
  icu-dev \
  g++ \
  && docker-php-ext-configure intl \
  && docker-php-ext-install \
  intl \
  && docker-php-ext-enable intl \
  && { find /usr/local/lib -type f -print0 | xargs -0r strip --strip-all -p 2>/dev/null || true; } \
  && apk del .build-deps \
  && rm -rf /tmp/* /usr/local/lib/php/doc/* /var/cache/apk/* \
  && apk add --no-cache imagemagick && docker-php-ext-install opcache && docker-php-ext-enable opcache

WORKDIR /var/www
RUN rm -rf /var/www/*

RUN [ -z "$DEVELOPMENT" ] && mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" || echo 0 > /dev/null
