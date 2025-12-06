import { Hero } from "./Hero";
import { Location } from "./Location";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Location />
    </>
  );
}
