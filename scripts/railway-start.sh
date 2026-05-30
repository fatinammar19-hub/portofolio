#!/usr/bin/env sh
set -e

# Writable dirs (Railway ephemeral filesystem)
mkdir -p \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

# Link public storage if missing
php artisan storage:link --force 2>/dev/null || true

# Production caches (requires APP_KEY in Railway variables)
if [ -n "$APP_KEY" ]; then
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache
fi

exec php artisan serve --host=0.0.0.0 --port="${PORT:-8000}"
