import type { FC } from 'react'
import { SectionCard } from './ui/section-card'
import { TimelineEntry } from './ui/timeline-entry'
import { TimelineSection } from './ui/timeline-section'
import type { Education } from '#/types/resume'

interface EducationProps {
	education?: Education[]
}

export const EducationSection: FC<EducationProps> = ({ education }) => {
	if (!education || education.length === 0) return null

	return (
		<TimelineSection title='sections.education'>
			{education.map((education, index) => {
				const title = education.studyType || education.area || ''
				const institution = education.institution || ''
				return (
					<TimelineEntry
						key={`education-${index}`}
						startDate={education.startDate}
						endDate={education.endDate}
					>
						<SectionCard
							title={title}
							subtitle={institution}
							url={education.url}
							location={education.location as string | undefined}
							summary={education.score ? `GPA: ${education.score}` : undefined}
							tags={education.courses || []}
						/>
					</TimelineEntry>
				)
			})}
		</TimelineSection>
	)
}
