FROM webdevops/php-nginx:8.0-alpine
COPY nginx.conf 10-php.conf /opt/docker/etc/nginx/vhost.common.d/
COPY --chown=1000:1000 src /app