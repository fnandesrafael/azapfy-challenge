import Navigator from '@/components/Navigator';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-base-100">
      <Navigator.Root>
        <Navigator.Navbar />
        <Navigator.Dropdown />
      </Navigator.Root>
    </main>
  );
}
