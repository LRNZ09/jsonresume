type ResumeProps = {
	data: any
}

export function Resume({ data }: ResumeProps) {
	return (
		<div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
			<h1>{data.basics.name}</h1>
			<h2>{data.basics.label}</h2>
			<p>{data.basics.email}</p>

			<section>
				<h3>Work</h3>
				{data.work.map((job: any) => (
					<div key={job.name}>
						<strong>{job.position}</strong> @ {job.name}
						<p>{job.summary}</p>
					</div>
				))}
			</section>
		</div>
	)
}
