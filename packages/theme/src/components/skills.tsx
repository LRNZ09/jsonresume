import type React from 'react'
import { SidebarSection } from './ui/sidebar-section'
import { Tag } from './ui/tag'
import { TagList } from './ui/tag-list'
import type { Skill } from '#/types/resume'

interface SkillsProps {
	skills: Skill[]
}

export const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
	if (!skills.length) return null

	return (
		<SidebarSection
			title='sections.skills'
			contentClassName='grid grid-cols-2 gap-4'
		>
			{skills.map((skill, skillIndex) => (
				<div key={`skill-${skillIndex}`}>
					<h3 className='text-base font-medium text-foreground'>
						{skill.name}
					</h3>
					{skill.level && (
						<span className='text-sm text-foreground-tertiary'>
							{skill.level}
						</span>
					)}

					{skill.keywords && skill.keywords.length > 0 && (
						<TagList className='mt-1'>
							{skill.keywords.map((keyword, keywordIndex) => (
								<Tag key={`keyword-${skillIndex}-${keywordIndex}`}>
									{keyword}
								</Tag>
							))}
						</TagList>
					)}
				</div>
			))}
		</SidebarSection>
	)
}
