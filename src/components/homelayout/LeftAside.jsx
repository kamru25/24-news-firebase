import React, { Suspense } from 'react';
import Categoryes from '../Categoryes';

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <Categoryes></Categoryes>
      </Suspense>
    </div>
  );
};

export default LeftAside;