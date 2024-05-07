import type { ListProps } from "../_data/lessons";
import Link from "next/link";

const Toc = (props: { lessons: ListProps[] }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-1/2">
        <h1 className="text-3xl mt-8">Table of contents</h1>
      </div>
      {
        props.lessons.map((item) => (<TocCard key={item.lesson.id} lesson={item.lesson} />))
      }
    </div>
  );
};

export default Toc;

const TocCard = (props: ListProps) => {
  console.dir(props)
  return (
    <div className="w-2/4 bg-white flex mt-8 shadow-md shadow-gray-400" id="card">
      <div className="h-48 flex-[0.7] bg-[#FF6767] font-bold p-4" id="card-logo">
        {props.lesson.id}
        <svg className="w-full h-full relative bottom-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path></svg>
      </div>
      <div className="flex-col p-8 w-2/3" id="lessons">
        <h2 className="text-xl mb-1 font-bold">{props.lesson.name}</h2>
        {props.lesson.chapters.map((chapter) =>
          <Link key={chapter.id} href={{
            pathname: "/chapters/[id]",
            query: {
              id: chapter.id
            },
          }}
            as={`/chapters/${chapter.id}`}>
            <div className="justify-between mx-4">{chapter.id % 100}. {chapter.name}</div>
          </Link>
        )}
      </div>
    </div>
  );
};
