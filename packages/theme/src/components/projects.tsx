import type React from 'react'
import type { Project } from '#/types/resume'
import { SectionCard } from './ui/section-card'
import { TimelineEntry } from './ui/timeline-entry'
import { TimelineSection } from './ui/timeline-section'

interface ProjectsProps {
	projects?: Project[]
}

export const ProjectsSection: React.FC<ProjectsProps> = ({ projects }) => {
	if (!projects?.length) return null

	return (
		<TimelineSection title='sections.projects'>
			{projects.map((project, index) => (
				<TimelineEntry
					key={`project-${index}`}
					startDate={project.startDate}
					endDate={project.endDate}
				>
					<SectionCard
						title={project.name}
						subtitle={project.entity}
						url={project.url} // Keeps title/subtitle link logic
						summary={project.description}
						highlights={project.highlights}
						tags={project.keywords}
						actionUrl={project.url} // Pass URL for the action link
						actionLabelKey='common.viewProject' // Pass translation key for the label
					/>
				</TimelineEntry>
			))}
		</TimelineSection>
	)
}
