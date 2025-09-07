import type { FC } from 'react'
import { useFormatter, useTranslations } from 'use-intl'
import type { Publication } from '#/types/resume'
import { SidebarCard } from './ui/sidebar-card'
import { SidebarSection } from './ui/sidebar-section'

interface PublicationsProps {
	publications: Publication[]
}

export const PublicationsSection: FC<PublicationsProps> = ({
	publications,
}) => {
	const f = useFormatter()
	const t = useTranslations()

	if (!publications?.length) {
		return null
	}

	return (
		<SidebarSection title='sections.publications'>
			{publications.map((publication, index) => (
				<SidebarCard
					key={index}
					title={publication.name}
					subtitle={publication.publisher}
					date={
						publication.releaseDate
							? f.dateTime(new Date(publication.releaseDate))
							: ''
					}
					url={publication.url || undefined}
					urlLabel={t('common.viewPublication')}
					content={publication.summary}
				/>
			))}
		</SidebarSection>
	)
}
