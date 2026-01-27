import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import { TaskDetails } from '../../components/TaskDetails';

export default function TaskPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || Array.isArray(id)) {
    return <Layout><div>Invalid task ID</div></Layout>;
  }

  return (
    <Layout>
      <div className="px-4 py-6">
        <TaskDetails taskId={parseInt(id)} />
      </div>
    </Layout>
  );
}
