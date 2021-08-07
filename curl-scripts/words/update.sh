#!/bin/bash
# TOKEN="1417e6cf1ec8659781f80d81365a98f1" ID="610edb665a9caf0015706900" WORD="lover" DEFINITION="romantic" ORIGIN="latin" LANGUAGE="English" SENTENCE="Lover" sh curl-scripts/words/update.sh

API="https://immense-anchorage-35552.herokuapp.com"
URL_PATH="/words"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "word": {
      "word": "'"${WORD}"'",
      "definition": "'"${DEFINITION}"'",
      "origin": "'"${ORIGIN}"'",
      "language": "'"${LANGUAGE}"'",
      "sentence": "'"${SENTENCE}"'"
    }
  }'

echo
