#! /bin/bash

cat << EOF
         {                  
      {   }                 
       }_{ __{              
    .-{   }   }-.           
   (   }     {   )          First installation started...
   |'-.._____..-'|          
   |             ;--.       Due to the installation of internet on your machine,
   |            (__  \      this task can be long, very long. But don't worry
   |             | )  )     it's executed only the first time the devcontainer
   |             |/  /      is build (or rebuild). 
   |             /  /       
   |            (  /        Take a break, take a coffee, browse the issues
   \             y'         
    '-.._____..-'           
EOF

git config --global --add safe.directory /workspace
git config pull.rebase true
git config core.hooksPath /workspace/githooks
git config commit.gpgsign true
git update-index --assume-unchanged .devcontainer/.env

# Disable git info in zsh promtp due to performence issue
# https://github.com/microsoft/vscode/issues/133215
git config oh-my-zsh.hide-info 1

make -f build/Makefile devcontainer-init

# Configure RabbitMQ
./bin/rabbitmqadmin --host rabbitmq --user rabbitmq --password rabbitmq declare exchange name="webhooks" type="direct"
./bin/rabbitmqadmin --host rabbitmq --user rabbitmq --password rabbitmq declare queue name="webhooks.processing" auto_delete="false" durable="true"
./bin/rabbitmqadmin --host rabbitmq --user rabbitmq --password rabbitmq declare queue name="webhooks.dlq" auto_delete="false" durable="true"
./bin/rabbitmqadmin --host rabbitmq --user rabbitmq --password rabbitmq declare binding source="webhooks" destination="webhooks.processing"
./bin/rabbitmqadmin --host rabbitmq --user rabbitmq --password rabbitmq declare binding source="webhooks" destination="webhooks.dlq" routing_key="webhooks.dlq"
./bin/rabbitmqadmin --host rabbitmq --user rabbitmq --password rabbitmq declare policy name="webhooks.dlq.policy" pattern="^webhooks.processing$" definition='{"dead-letter-exchange":"webhooks", "dead-letter-routing-key": "webhooks.dlq"}' apply-to=queues

# Configure Minio
# Create all s3 buckets
go install github.com/minio/mc@latest
mc alias set s3 http://minio:9000 $AWS_ACCESS_KEY_ID $AWS_SECRET_ACCESS_KEY
mc mb s3/s42-users --ignore-existing --region europe-west1
mc mb s3/s42-exports --ignore-existing --region europe-west1

# Install and configure kubeseal
go install github.com/bitnami-labs/sealed-secrets/cmd/kubeseal@v0.21.0