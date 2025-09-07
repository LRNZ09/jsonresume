import type React from 'react'
// TODO
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import { cn } from '../../lib/cn'

interface MarkdownProps {
	content?: string
	className?: string
}

export const Markdown: React.FC<MarkdownProps> = ({ content, className }) => {
	if (!content) return null

	return (
		<div
			className={cn('markdown', className)}
			role='contentinfo'
			aria-label='Markdown content'
		>
			{/* TODO */}
			{/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown> */}
		</div>
	)
}
