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
    <div className="w-fit h-fit">
      <Markdown>{content}</Markdown>
      <div>
        <h1 className="bg-blue-50">Hello World</h1>
        <h2 className="bg-red-50">Hello World</h2>
      </div>
    </div>
  );
}
