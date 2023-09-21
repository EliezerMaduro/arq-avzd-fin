sam package --template-file template.yaml --output-template-file package.yaml --profile eg-fin

sam deploy --template-file template.yaml --stack-name arq-avzd-fin-be --capabilities CAPABILITY_IAM --profile eg-fin