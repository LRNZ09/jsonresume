import type { FC } from 'react'
// import type { ResumeSchema } from '../types/resumeSchema'
import { SidebarCard } from './ui/sidebar-card'
import { SidebarSection } from './ui/sidebar-section'

type Reference = any //NonNullable<ResumeSchema['references']>[number]

interface ReferencesProps {
	references?: Reference[]
}

export const References: FC<ReferencesProps> = ({ references }) => {
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
