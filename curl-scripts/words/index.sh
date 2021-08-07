#!/bin/sh

# TOKEN="1417e6cf1ec8659781f80d81365a98f1" sh curl-scripts/words/index.sh

API="https://immense-anchorage-35552.herokuapp.com"
URL_PATH="/words"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
