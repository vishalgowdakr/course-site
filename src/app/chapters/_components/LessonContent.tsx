import { useEffect, useState } from "react"
import Markdown from "react-markdown"

interface LessonContentProps {
  uri: string
}

export default function LessonContent({ uri }: LessonContentProps) {
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    fetch(uri)
      .then(response => response.text())
      .then(text => { setContent(text); console.log(text) })
      .catch(error => console.error("Error loading lesson content:", error))
  }, [uri])

  return (
    <div className="h-9 w-full">
      <Markdown>{content}</Markdown>
    </div>
  )
}
