import type { SetRequired } from 'type-fest'
import type { ResumeSchema } from './resume-schema'

type Resume = SetRequired<ResumeSchema, 'basics'>

type Basics = Resume['basics']

type Award = NonNullable<Resume['awards']>[number]
type Certificate = NonNullable<Resume['certificates']>[number]
type Education = NonNullable<Resume['education']>[number]
type Interest = NonNullable<Resume['interests']>[number]
type Language = NonNullable<Resume['languages']>[number]
type Project = NonNullable<Resume['projects']>[number]
type Publication = NonNullable<Resume['publications']>[number]
type Reference = NonNullable<Resume['references']>[number]
type Skill = NonNullable<Resume['skills']>[number]
type Volunteer = NonNullable<Resume['volunteer']>[number]
type Work = NonNullable<Resume['work']>[number]

export type {
	Award,
	Basics,
	Certificate,
	Education,
	Interest,
	Language,
	Project,
	Publication,
	Reference,
	Resume,
	Skill,
	Volunteer,
	Work,
}
