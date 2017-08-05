#!/usr/bin/env bash
yarn build && rsync -azv --progress --delete ./dist/ kutalo:/var/www/deskwize.kutalo.com
