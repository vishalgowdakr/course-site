import Banner from "./_components/banner";
import Toc from "./_components/toc";
import getLessonsObj from "./_data/lessons";

async function HomePage() {
  const lessonsObj = await getLessonsObj();
  return (
    <main className="">
      <Banner />
      <Toc lessons={lessonsObj} />
    </main>
  );
}

export default HomePage;
