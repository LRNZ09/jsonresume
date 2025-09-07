import type { FC } from 'react'
import type { Resume } from '#/types/resume'
import { AwardsSection } from './awards'
import { CertificatesSection } from './certificates'
import { EducationSection } from './education'
import { Header } from './header'
import { InterestsSection } from './interests'
import { LanguagesSection } from './languages'
import { ProjectsSection } from './projects'
import { PublicationsSection } from './publications'
import { ReferencesSection } from './references'
import { SkillsSection } from './skills'
import { VolunteerSection } from './volunteer'
import { WorkSection } from './work-experience'

interface ResumeSectionsProps {
	resume: Resume
}

export const ResumeSections: FC<ResumeSectionsProps> = ({ resume }) => {
	const {
		basics,
		work,
		education,
		skills,
		projects,
		awards,
		certificates,
		publications,
		languages,
		interests,
		references,
		volunteer,
	} = resume

	return (
		<div
			className={`container p-3 mx-auto lg:w-[960px] bg-color text-text print:max-w-full print:p-0 print:w-full print:px-6`}
		>
			<Header basics={basics} />

			<div
				className={`flex flex-col gap-6 lg:flex-row print:flex-row print:gap-3`}
			>
				<div className={`lg:w-2/3 print:w-[72%]`}>
					{work && work.length > 0 && <WorkSection work={work} />}
					{education && education.length > 0 && (
						<EducationSection education={education} />
					)}
					{projects && projects.length > 0 && (
						<ProjectsSection projects={projects} />
					)}
					{volunteer && volunteer.length > 0 && (
						<VolunteerSection volunteer={volunteer} />
					)}
				</div>

				<div className={`lg:w-1/3 print:w-[28%]`}>
					<div className='print:space-y-2'>
						{skills && skills.length > 0 && <SkillsSection skills={skills} />}
						{languages && languages.length > 0 && (
							<LanguagesSection languages={languages} />
						)}
						{publications && publications.length > 0 && (
							<PublicationsSection publications={publications} />
						)}
						{certificates && certificates.length > 0 && (
							<CertificatesSection certificates={certificates} />
						)}
						{awards && awards.length > 0 && <AwardsSection awards={awards} />}
						{references && references.length > 0 && (
							<ReferencesSection references={references} />
						)}
						{interests && interests.length > 0 && (
							<InterestsSection interests={interests} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResumeSections
