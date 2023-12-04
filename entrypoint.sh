

eval "$(aws secretsmanager get-secret-value --secret-id app/ghost-editor --version-stage AWSCURRENT --region $AWS_ENV --query 'SecretString' --output text | sed 's/^/export /')"


