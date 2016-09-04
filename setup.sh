#!/bin/sh

for file in scripts/setup/*.sh; do
    . $file
done
