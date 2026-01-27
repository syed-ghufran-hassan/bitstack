# Contract Functions API Reference

## Public Functions

### create-task
Creates a new task with specified parameters.

**Parameters:**
- `title` (string-ascii 50): Task title
- `description` (string-ascii 256): Task description  
- `amount` (uint): Reward amount in micro-STX
- `deadline` (uint): Block height deadline
- `priority` (uint): Priority level (0=low, 1=normal, 2=high)
- `category` (uint): Task category

**Returns:** `(response uint uint)`

### accept-task
Accepts an open task as a worker.

**Parameters:**
- `task-id` (uint): ID of the task to accept

**Returns:** `(response bool uint)`

### submit-work
Submits work for an accepted task.

**Parameters:**
- `task-id` (uint): ID of the task
- `submission` (string-ascii 256): Proof of work

**Returns:** `(response bool uint)`

### approve-work
Approves submitted work and releases payment.

**Parameters:**
- `task-id` (uint): ID of the task

**Returns:** `(response bool uint)`

### dispute-task
Creates a dispute for a task.

**Parameters:**
- `task-id` (uint): ID of the task to dispute

**Returns:** `(response bool uint)`

### cancel-task
Cancels an open task and refunds creator.

**Parameters:**
- `task-id` (uint): ID of the task to cancel

**Returns:** `(response bool uint)`

## Read-Only Functions

### get-task
Retrieves task details by ID.

**Parameters:**
- `id` (uint): Task ID

**Returns:** `(optional task-data)`

### get-nonce
Returns the current task counter.

**Returns:** `uint`

### is-task-expired
Checks if a task has expired.

**Parameters:**
- `task-id` (uint): Task ID to check

**Returns:** `bool`
