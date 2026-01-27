# Deployment Guide

## Prerequisites

- Clarinet CLI installed
- Stacks wallet with STX for deployment
- Environment configured for target network

## Local Development

1. **Start Clarinet Console**
   ```bash
   cd contracts
   clarinet console
   ```

2. **Deploy Contract**
   ```clarity
   ::deploy_contract bittask
   ```

3. **Test Functions**
   ```clarity
   (contract-call? .bittask create-task "Test Task" "Description" u1000000 u1000 u1 u0)
   ```

## Testnet Deployment

1. **Configure Settings**
   ```bash
   # Edit settings/Testnet.toml
   [network]
   name = "testnet"
   ```

2. **Deploy**
   ```bash
   clarinet deploy --network testnet
   ```

3. **Verify Deployment**
   - Check transaction in Stacks Explorer
   - Note contract address for frontend configuration

## Mainnet Deployment

1. **Final Testing**
   - Complete all tests on testnet
   - Verify all functionality works
   - Audit smart contract code

2. **Deploy to Mainnet**
   ```bash
   clarinet deploy --network mainnet
   ```

3. **Post-Deployment**
   - Update frontend configuration
   - Monitor contract performance
   - Set up monitoring and alerts

## Environment Variables

```bash
# Frontend .env.local
NEXT_PUBLIC_STACKS_NETWORK=testnet
NEXT_PUBLIC_CONTRACT_ADDRESS=ST1234...
```

## Monitoring

- Set up transaction monitoring
- Monitor contract balance
- Track user activity and errors
- Set up alerting for issues
