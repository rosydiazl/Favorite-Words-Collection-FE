#!/bin/bash
# EMAIL="neks@lass.com" PASSWORD="new" PASSWORD="new" sh curl-scripts/auth/sign-up.sh

curl "https://immense-anchorage-35552.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
