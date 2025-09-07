import type { FC } from 'react'
// import type { ResumeSchema } from '../types/resumeSchema'
import { SectionCard } from './ui/section-card'
import { TimelineEntry } from './ui/timeline-entry'
import { TimelineSection } from './ui/timeline-section'

type Work = any //NonNullable<ResumeSchema['work']>[number] & {
// 	keywords?: string[]
// }

interface WorkExperienceProps {
	work?: Work[]
}

export const WorkExperience: FC<WorkExperienceProps> = ({ work }) => {
	if (!work || work.length === 0) return null

	return (
		<TimelineSection title='sections.work'>
			{work.map((workItem, index) => (
				<TimelineEntry
					key={`work-${index}`}
					startDate={workItem.startDate}
					endDate={workItem.endDate}
				>
					<SectionCard
						title={workItem.position}
						subtitle={workItem.name}
						url={workItem.url}
						location={workItem.location}
						summary={workItem.summary}
						highlights={workItem.highlights}
						tags={workItem.keywords}
					/>
				</TimelineEntry>
			))}
		</TimelineSection>
	)
}
