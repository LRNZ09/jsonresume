import { type FC, memo } from 'react'
import { useFormatter, useTranslations } from 'use-intl'
import { SidebarCard } from './ui/sidebar-card'
import { SidebarSection } from './ui/sidebar-section'
import type { Publication } from '#/types/resume'

interface PublicationsProps {
	publications: Publication[]
}

export const PublicationsSection: FC<PublicationsProps> = memo(
	({ publications }) => {
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
	},
)
