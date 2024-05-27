"use server"

import { promises as fs } from 'fs'
import ReactMarkdown from 'react-markdown'

interface LessonContentProps {
  uri: string
}

export default async function LessonContent({ uri }: LessonContentProps) {
  let content = ""
  try {
    content = await fs.readFile(uri, 'utf8')
  } catch (error) {
    console.error('Error reading file:', error)
    content = "Error loading content."
  }

  return (
    <div className="h-9 w-full">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
