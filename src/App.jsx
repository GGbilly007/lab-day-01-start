import { users } from './data/users.js'

// 🔴 ทั้งไฟล์นี้เป็นแค่หน้าจอเช็กว่าเครื่องพร้อม — ลบทิ้งทั้งก้อนแล้วเขียนใหม่ใน Lab A
// เป้าหมายตอนจบ Lab A: <Layout> ห่อ grid ของ <ProfileCard> ที่วนออกมาจาก users ด้วย .map()
// (อย่าลืม key ที่ element นอกสุดของ .map())

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-md bg-white border border-gray-200 rounded-lg p-6 shadow">
        <h1 className="text-xl font-bold">พร้อมเริ่ม Lab วันที่ 1 แล้ว</h1>
        <p className="text-sm text-gray-600 mt-2">
          โหลดข้อมูลจาก <code>src/data/users.js</code> ได้ {users.length} คน
        </p>
        <p className="text-sm text-gray-600 mt-2">
          ถ้ากล่องนี้มีขอบมนและมีเงา แปลว่า Tailwind ทำงานแล้ว — เปิด{' '}
          <code>mockup-team-directory.png</code> แล้วเริ่ม Lab A ได้เลย
        </p>
      </div>
    </div>
  )
}

export default App
