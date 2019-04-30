#!/bin/sh

echo "Run pre-commit check"

jsFiles=$(git diff HEAD --name-only --staged --relative . | egrep \.jsx?$)
cssFiles=$(git diff HEAD --name-only --staged --relative . | egrep \.scss$)


# use stylelint
if [ "$cssFiles" != "" ]; then
  npm run stylelint $cssFiles
  stylelintResult=$?
  echo $stylelintResult
  if [ "$stylelintResult" != 0 ]; then
    exit 1
  fi
fi


# use flow
npm run flow

# use eslint
if [ "$jsFiles" != "" ]; then
  npm run eslint $jsFiles
  eslintResult=$?
  echo $eslintResult
  if [ "$eslintResult" != 0 ]; then
    exit 1
  fi
fi
