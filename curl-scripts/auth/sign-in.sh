#!/bin/bash
# EMAIL="neks@lass.com" PASSWORD="new" sh curl-scripts/auth/sign-in.sh

curl  "https://immense-anchorage-35552.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
