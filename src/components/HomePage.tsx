import { Hero } from "./Hero";
import { Menu } from "./Menu";
import { About } from "./About";
import { Location } from "./Location";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Menu onNavigate={onNavigate} />
      <About />
      <Location />
    </>
  );
}
