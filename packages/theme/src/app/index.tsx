import type { FC } from 'react'
import { ResumeSections } from '../components/resume'
import { locales, type Locale } from '../i18n/config'
import { IntlProvider } from 'use-intl'
import { IconContext } from '@phosphor-icons/react'
import type { Resume } from '#/types/resume'

interface AppProps {
	resume: Resume
	locale?: Locale
}

const App: FC<AppProps> = ({ resume, locale = 'en' }) => {
	return (
		<IntlProvider
			messages={locales[locale].messages}
			locale={locale}
			timeZone='UTC'
		>
			<IconContext.Provider value={{ size: 16, weight: 'duotone' }}>
				<ResumeSections resume={resume} />
			</IconContext.Provider>
		</IntlProvider>
	)
}

export { App }
