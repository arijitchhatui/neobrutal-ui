import { Button } from '@/components/button';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">NeoBrutal UI</h1>
        <p className="text-xl mb-8">shadcn for neobrutalism</p>

        <div className="space-x-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </div>
    </main>
  );
}