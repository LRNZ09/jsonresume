import type { FC } from 'react'
import type { Volunteer } from '#/types/resume'
import { SectionCard } from './ui/section-card'
import { TimelineEntry } from './ui/timeline-entry'
import { TimelineSection } from './ui/timeline-section'

interface VolunteerProps {
	volunteer?: Volunteer[]
}

export const VolunteerSection: FC<VolunteerProps> = ({ volunteer }) => {
	if (!volunteer?.length) return null

	return (
		<TimelineSection title='sections.volunteer'>
			{volunteer.map((volunteerItem, index) => (
				<TimelineEntry
					key={`volunteer-${index}`}
					startDate={volunteerItem.startDate}
					endDate={volunteerItem.endDate}
				>
					<SectionCard
						title={volunteerItem.position}
						subtitle={volunteerItem.organization}
						url={volunteerItem.url}
						highlights={volunteerItem.highlights}
						summary={volunteerItem.summary}
						actionUrl={volunteerItem.url}
						actionLabelKey='common.visitWebsite'
					/>
				</TimelineEntry>
			))}
		</TimelineSection>
	)
}
