function Layout({ children }) {
	return (
		<main className="page-shell">
			<header className="page-header">
				<p className="eyebrow">Mockup · Lab Day 1</p>
				<h1>ทีมของเรา</h1>
				<p className="subtitle">
					การ์ดทุกใบมาจาก <code>src/data/users.js</code> array เดียว — เพิ่มคนที่ 7 ในไฟล์นั้นแล้วการ์ดต้องโผล่เอง
				</p>
			</header>
			<section className="team-grid" aria-label="สมาชิกทีม">
				{children}
			</section>
			<p className="note">
				Avatar = ตัวอักษรแรกของชื่อ · Badge = children ไม่ใช่ prop ชื่อ text · การ์ดหัวหน้าทีม = ขอบหนา + วงกลมใหญ่กว่า + ป้ายม่วงเพิ่ม 1 ใบ
			</p>
		</main>
	)
}

export default Layout
