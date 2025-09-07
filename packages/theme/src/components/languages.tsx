import type React from 'react'
import type { Language } from '#/types/resume'
import { SidebarSection } from './ui/sidebar-section'

interface LanguagesProps {
	languages: Language[]
}

export const LanguagesSection: React.FC<LanguagesProps> = ({ languages }) => {
	if (!languages?.length) return null

	return (
		<SidebarSection
			title='sections.languages'
			contentClassName='grid grid-cols-2'
		>
			{languages.map((language, index) => (
				<div key={`language-${index}`}>
					<h3 className='text-base font-medium text-foreground'>
						{language.language}
					</h3>
					{language.fluency && (
						<p className='text-sm text-foreground-tertiary'>
							{language.fluency}
						</p>
					)}
				</div>
			))}
		</SidebarSection>
	)
}
