#!/bin/bash
set -eu

# Non cache assets
aws s3 cp ./build/index.html "s3://${OUTPUT_BUCKET}/" --cache-control no-cache

# Cache assets for one year in the front end and cloud front
aws s3 sync ./build/ "s3://${OUTPUT_BUCKET}/" \
--delete --cache-control "max-age=31536000" \
--exclude "./build/index.html"
