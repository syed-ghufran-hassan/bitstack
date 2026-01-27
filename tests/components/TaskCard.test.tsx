import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TaskCard } from '../components/TaskCard';

describe('TaskCard Component', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    description: 'Test Description',
    amount: 1000000,
    status: 'open',
    deadline: 1000,
    priority: 1,
    category: 0,
  };

  it('should render task information', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('Test Task')).toBeDefined();
    expect(screen.getByText('Test Description')).toBeDefined();
  });

  it('should display correct amount', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('1 STX')).toBeDefined();
  });

  it('should show correct status', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('open')).toBeDefined();
  });
});
