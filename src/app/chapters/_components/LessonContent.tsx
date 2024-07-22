import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

type Data = {
  data: string
}

export default function LessonContent({ uri }: { uri: string }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch(`/api/lessons?chapter=${uri}`, {
          method: 'POST'
        });
        const data: Data = await response.json() as Data;
        setContent(data.data);
      } catch (error) {
        console.error('Error fetching lesson content:', error);
      }
    }

    fetchContent().catch(console.error);
  }, [uri]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl px-4">
        <article className="prose lg:prose-lg m-0">
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </div>
  );
}
