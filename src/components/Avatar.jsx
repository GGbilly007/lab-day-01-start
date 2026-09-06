const sizeClasses = {
	sm: 'avatar avatar-sm',
	md: 'avatar avatar-md',
	lg: 'avatar avatar-lg',
}

const colorClasses = {
	blue: 'avatar-blue',
	purple: 'avatar-purple',
	emerald: 'avatar-emerald',
}

function Avatar({ name, size = 'md', color = 'blue' }) {
	return <div className={`${sizeClasses[size]} ${colorClasses[color]}`}>{name.charAt(0)}</div>
}

export default Avatar
