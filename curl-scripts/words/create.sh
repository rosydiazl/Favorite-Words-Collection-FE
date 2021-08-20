#!/bin/bash
# TOKEN="1417e6cf1ec8659781f80d81365a98f1" WORD="hola" DEFINITION="saludar" ORIGIN="latin" LANGUAGE="espanol" SENTENCE="hola" sh curl-scripts/words/create.sh


curl "https://immense-anchorage-35552.herokuapp.com/words" \
  --include \
  --request POST \
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
