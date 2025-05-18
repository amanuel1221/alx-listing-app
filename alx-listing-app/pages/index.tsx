import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">ALX Listing App</h1>
      <Card
        title="Sample Property"
        image="/assets/sample.jpg"
        description="A beautiful place to stay."
      />
      <Button onClick={() => alert('Booked!')}>Book Now</Button>
    </main>
  );
}