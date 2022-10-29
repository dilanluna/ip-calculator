import { useState } from 'react';
import Form from './form';
import Results from './results';
import { Network } from './types';

export default function App() {
  const [network, setNetwork] = useState<Network>();
  return (
    <div className="py-6 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="px-4 space-y-10">
          <Form onSubmit={(data) => setNetwork(data)} />
          <Results network={network} />
        </div>
      </div>
    </div>
  );
}
