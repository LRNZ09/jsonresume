import type React from 'react'
import { useFormatter, useTranslations } from 'use-intl'
import { SidebarCard } from './ui/sidebar-card'
import { SidebarSection } from './ui/sidebar-section'
import { CertificateIcon } from '@phosphor-icons/react'
import type { Certificate } from '#/types/resume'

interface CertificatesProps {
	certificates?: Certificate[]
}

export const CertificatesSection: React.FC<CertificatesProps> = ({
	certificates,
}) => {
	const f = useFormatter()
	const t = useTranslations()

	if (!certificates?.length) return null

	return (
		<SidebarSection title='sections.certificates' contentClassName='space-y-3'>
			{certificates.map((certificate, index) => {
				const dateInfo = certificate.date
					? `${t('date.label')}: ${f.dateTime(new Date(certificate.date))}`
					: ''

				return (
					<SidebarCard
						key={index}
						title={
							<div className='flex items-start'>
								<div className='mr-3 text-brand'>
									<CertificateIcon />
								</div>
								<div>{certificate.name}</div>
							</div>
						}
						subtitle={
							certificate.issuer
								? `${t('common.issuedBy')}: ${certificate.issuer}`
								: undefined
						}
						date={dateInfo}
						url={certificate.url}
						urlLabel={t('common.viewCertificate')}
					/>
				)
			})}
		</SidebarSection>
	)
}
