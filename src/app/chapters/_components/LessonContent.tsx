import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

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
    <div className="h-full w-full">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
