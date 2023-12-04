#!/bin/sh

eval "$(aws secretsmanager get-secret-value --secret-id app/valkyrie --version-stage AWSCURRENT --region $AWS_ENV --query 'SecretString' --output text | sed 's/^/export /')"

# Start the Next.js app
npm run dev
