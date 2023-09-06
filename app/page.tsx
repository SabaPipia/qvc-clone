import "./page.scss";
import { Hero, TopSelling, Category, Trending } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <TopSelling />
      <Category />
      <Trending />
    </main>
  );
}
