import { IconContext } from '@phosphor-icons/react'
import type { FC } from 'react'
import { IntlProvider } from 'use-intl'
import type { Resume } from '#/types/resume'
import { ResumeSections } from '../components/resume'
import { type Locale, locales } from '../i18n/config'

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
