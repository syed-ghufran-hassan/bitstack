#!/bin/bash

# BitTask Deployment Script
set -e

echo "🚀 Starting BitTask deployment..."

# Validate environment
if [ -z "$STACKS_NETWORK" ]; then
    echo "❌ STACKS_NETWORK environment variable not set"
    exit 1
fi

if [ -z "$CONTRACT_ADDRESS" ]; then
    echo "❌ CONTRACT_ADDRESS environment variable not set"
    exit 1
fi

echo "📋 Environment: $STACKS_NETWORK"
echo "📋 Contract Address: $CONTRACT_ADDRESS"

# Deploy contract
echo "📦 Deploying smart contract..."
clarinet deploy --network $STACKS_NETWORK

if [ $? -eq 0 ]; then
    echo "✅ Contract deployed successfully!"
else
    echo "❌ Contract deployment failed"
    exit 1
fi

# Verify deployment
echo "🔍 Verifying deployment..."
curl -s "https://stacks-node-api.${STACKS_NETWORK}.stacks.co/extended/v1/address/${CONTRACT_ADDRESS}/transactions" | jq .

# Update frontend config
echo "⚙️ Updating frontend configuration..."
echo "NEXT_PUBLIC_STACKS_NETWORK=$STACKS_NETWORK" > frontend/.env.local
echo "NEXT_PUBLIC_CONTRACT_ADDRESS=$CONTRACT_ADDRESS" >> frontend/.env.local

echo "🎉 Deployment completed successfully!"
echo "📝 Next steps:"
echo "   1. Update frontend with new contract address"
echo "   2. Test all functionality on $STACKS_NETWORK"
echo "   3. Monitor contract performance"
