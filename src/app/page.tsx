import Banner from "./_components/banner";
import Toc from "./_components/toc";
import sampleLessons from "./_data/lessons";

export default function HomePage() {
  return (
    <main className="">
      <Banner />
      <Toc lessons={sampleLessons} />
    </main>
  );
}
