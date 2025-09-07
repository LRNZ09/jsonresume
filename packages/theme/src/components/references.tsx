import type { FC } from 'react'
import { SidebarCard } from './ui/sidebar-card'
import { SidebarSection } from './ui/sidebar-section'
import type { Reference } from '#/types/resume'

interface ReferencesProps {
	references?: Reference[]
}

export const ReferencesSection: FC<ReferencesProps> = ({ references }) => {
	if (!references?.length) {
		return null
	}

	return (
		<SidebarSection title='sections.references'>
			{references.map((reference, index) => (
				<SidebarCard
					key={index}
					title={reference.name}
					content={reference.reference}
				/>
			))}
		</SidebarSection>
	)
}
