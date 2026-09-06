const variantClasses = {
	online: 'badge-online',
	away: 'badge-away',
	offline: 'badge-offline',
	lead: 'badge-lead',
}

function Badge({ variant, children }) {
	return <span className={`badge ${variantClasses[variant]}`}>{children}</span>
}

export default Badge
