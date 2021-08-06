#!/bin/bash
# TOKEN="d69e07a64bde3cbb160df32a7256cb23" sh curl-scripts/auth/sign-out.sh

curl "https://immense-anchorage-35552.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo
