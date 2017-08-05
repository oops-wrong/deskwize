#!/usr/bin/env bash
npm run build && rsync -azv --progress --delete ./dist/ moscow:/var/www/deskwize.1m8.ru
