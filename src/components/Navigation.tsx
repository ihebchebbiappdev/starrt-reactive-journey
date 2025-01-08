import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-primary">MyApp</div>
        <div className="space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Features</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;