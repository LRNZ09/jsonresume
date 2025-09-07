import { TrophyIcon } from '@phosphor-icons/react'
import type React from 'react'
import { useFormatter, useTranslations } from 'use-intl'
import type { Award } from '#/types/resume'
import { SidebarCard } from './ui/sidebar-card'
import { SidebarSection } from './ui/sidebar-section'

interface AwardsProps {
	awards?: Award[]
}

export const AwardsSection: React.FC<AwardsProps> = ({ awards }) => {
	const f = useFormatter()
	const t = useTranslations()

	if (!awards?.length) {
		return null
	}

	return (
		<SidebarSection title='sections.awards'>
			{awards.map((award, index) => {
				const dateInfo = award.date
					? `${t('date.label')}: ${f.dateTime(new Date(award.date))}`
					: ''

				return (
					<SidebarCard
						key={index}
						title={
							<div className='flex items-start'>
								<div className='mr-3 text-brand'>
									<TrophyIcon />
								</div>
								<div>{award.title}</div>
							</div>
						}
						subtitle={
							award.awarder
								? `${t('common.awardedBy')}: ${award.awarder}`
								: undefined
						}
						date={dateInfo}
						url={award.url as string}
						urlLabel={t('common.viewAward')}
						content={award.summary as string}
					/>
				)
			})}
		</SidebarSection>
	)
}
