import { useState } from 'react';
import Form from './form';
import Results from './results';
import { Network } from './types';

export default function App() {
  const [network, setNetwork] = useState<Network>();
  return (
    <div className="py-6 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <Form onSubmit={(data) => setNetwork(data)} />
        <Results network={network} />
      </div>
    </div>
  );
}
