import React, { Suspense } from 'react';

const LazyWrapper = ({ Lazy }) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Lazy />
    </Suspense>
  );
};

export default LazyWrapper;
