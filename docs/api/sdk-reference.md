# SDK Reference

## Installation

```bash
npm install @stacks/transactions @stacks/network @stacks/connect
```

## Core Functions

### Network Configuration

```typescript
import { getStacksNetwork } from './lib/stacks-connection';

const network = getStacksNetwork();
```

### Wallet Connection

```typescript
import { useStacksAuth } from './hooks/useStacksAuth';

const { isSignedIn, address, connect, disconnect } = useStacksAuth();
```

### Contract Interactions

```typescript
import { useContractCall } from './hooks/useContractCall';
import { createTaskTransaction } from './lib/transactions/create-task';

const { executeTransaction, loading, error } = useContractCall();

const createTask = async () => {
  const tx = createTaskTransaction(title, description, amount, deadline, priority, category);
  await executeTransaction(tx);
};
```

### Task Data Management

```typescript
import { useTaskData } from './hooks/useTaskData';

const { task, loading, error, refetch } = useTaskData(taskId);
```

## Transaction Functions

- `createTaskTransaction(title, description, amount, deadline, priority, category)`
- `acceptTaskTransaction(taskId)`
- `submitWorkTransaction(taskId, submission)`
- `approveWorkTransaction(taskId)`
- `disputeTaskTransaction(taskId)`

## Hooks

- `useStacksAuth()` - Wallet authentication
- `useContractCall()` - Contract transaction execution
- `useTaskData(taskId)` - Task data fetching
- `useWalletBalance(address)` - Wallet balance monitoring
- `useTransactionStatus(txId)` - Transaction status tracking
