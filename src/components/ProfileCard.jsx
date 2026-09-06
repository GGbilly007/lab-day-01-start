import Avatar from './Avatar.jsx'
import Badge from './Badge.jsx'

const statusLabels = {
	online: 'ออนไลน์',
	away: 'ไม่อยู่ที่โต๊ะ',
	offline: 'ออฟไลน์',
}

function ProfileCard({ user }) {
	const avatarSize = user.isLead ? 'lg' : 'md'
	const avatarColor = user.isLead ? 'purple' : 'blue'

	return (
		<article className={`profile-card${user.isLead ? ' profile-card-lead' : ''}`}>
			<Avatar name={user.name} size={avatarSize} color={avatarColor} />
			<div className="profile-body">
				<h2>{user.name}</h2>
				<p>{user.role} · {user.department}</p>
				<div className="badges">
					<Badge variant={user.status}>{statusLabels[user.status]}</Badge>
					{user.isLead && <Badge variant="lead">หัวหน้าทีม</Badge>}
				</div>
			</div>
		</article>
	)
}

export default ProfileCard
