import Form from './form';

export default function App() {
  return (
    <div className="py-6 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <Form onSubmit={(data) => console.log(data)} />
      </div>
    </div>
  );
}
