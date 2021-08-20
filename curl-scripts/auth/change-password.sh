#!/bin/bash
# TOKEN="fbf99941bc111672ac5fa2e467dd2d90" OLDPW="new" NEWPW="newer" sh curl-scripts/auth/change-password.sh 

curl "https://immense-anchorage-35552.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
