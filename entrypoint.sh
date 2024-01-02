#!/bin/sh

AWS_ENV=ap-south-1

eval "$(aws secretsmanager get-secret-value --secret-id app/ghost-editor --version-stage AWSCURRENT --region $AWS_ENV --query 'SecretString' --output text | sed 's/^/export /')"

# Start the Next.js app
npm run dev

echo "Secrets loaded successfully"
