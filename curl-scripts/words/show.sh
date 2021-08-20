#!/bin/sh
# TOKEN="1417e6cf1ec8659781f80d81365a98f1" ID="610edb665a9caf0015706900" sh curl-scripts/words/show.sh

API="https://immense-anchorage-35552.herokuapp.com"
URL_PATH="/words"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
