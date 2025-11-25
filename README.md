# Todo App với React

Ứng dụng quản lý công việc đẹp mắt, đầy đủ chức năng: thêm/sửa/xóa, lọc, tìm kiếm, thống kê, dark mode, animation và lưu dữ liệu vào localStorage.

## ✨ Tính năng

✅ Thêm công việc - với validation không cho phép rỗng

✅ Đánh dấu hoàn thành - tích hợp checkbox và click vào text

✅ Xóa công việc - với animation mượt mà

✅ Lọc công việc - Tất cả / Đang làm / Hoàn thành

🔍 Tìm kiếm - theo từ khóa (không phân biệt hoa thường)

📊 Thống kê - Tổng số, đã xong, chưa xong, tỷ lệ % + progress bar

🌙 Dark/Light Mode - lưu cài đặt vào localStorage

💾 Lưu trữ tự động - dữ liệu được lưu vào localStorage

📱 Responsive - giao diện đẹp trên mọi thiết bị

🎬 Animation - hiệu ứng mượt mà với Tailwind CSS

## 🤖 AI Usage

Tôi đã dùng AI một cách thông minh để giải quyết các vấn đề khó và tăng tốc độ phát triển.

### 1. Các prompt AI tôi đã dùng khi gặp khó khăn

- "React: cách triển khai theme light/dark trong tailwind, đồng thời thêm/remove class 'dark' trên documentElement bằng useEffect"
- "Cách làm progress bar hiển thị tỷ lệ hoàn thành todo trong React + Tailwind CSS, có background và fill mượt"
- "React: làm animation xóa todo item bằng state + setTimeout + Tailwind classes (opacity + scale + translate)"

### 2. Đoạn code AI sinh ra + tôi đã sửa gì

#### Code AI đưa ra (Stats component):

```javascript
const completionRate = total > 0 ? (completed / total) \* 100 : 0;

<div className="progress-bar" style={{ width: `${completionRate}%` }} />
```

#### Tôi đã sửa thành:

```javascript
const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

<div className="progress-bar-bg">
  <div className="progress-bar-fill" style={{ width: `${completionRate}%` }} />
</div>;
```

Lý do sửa:

- AI dùng chia trực tiếp mà không làm tròn → tôi thêm Math.round để hiển thị % đẹp hơn (ví dụ 66% thay vì 66.666)
- Thêm div wrapper cho background để progress bar nhìn chuyên nghiệp hơn (Tailwind classes cho bg và fill)
- Thêm kiểm tra total > 0 để hiển thị conditional progress bar, tránh hiển thị khi không có todo

### 3. Lỗi nghiêm trọng của AI mà tôi đã phát hiện & sửa

#### Lỗi AI mắc phải:

AI quên xử lý animation khi delete, dẫn đến item biến mất đột ngột. Code AI đưa chỉ delete ngay lập tức mà không có transition.

Code lỗi AI đưa ra:

```javascript
const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

Tôi đã fix thành:

```javascript
onst [isDeleting, setIsDeleting] = useState(false);

const handleDelete = () => {
  setIsDeleting(true);
  setTimeout(() => {
    deleteTodo(todo.id);
  }, 300);
};

<li className={`todo-item ${isDeleting ? "opacity-0 scale-95 animate-slideOutRight" : "opacity-100 scale-100 animate-fadeInUp"}`}>
```

Hậu quả nếu không sửa: UX kém, item biến mất đột ngột → tôi thêm state isDeleting và setTimeout để trigger animation trước khi xóa thật sự.

Ngoài ra tôi còn thêm:

- Validation cho input thêm todo (không cho rỗng, thêm class error)
- Emoji cho filter buttons và theme toggle để UI sinh động hơn

### Công nghệ sử dụng

- Create React App + React 18
- Tailwind CSS cho styling
- localStorage cho persist data và theme
- Custom CSS cho animations và themes

### 🚀 Hướng dẫn chạy dự án

```bash
# 1. Vào thư mục dự án
cd todo_mig_app

# 2. Cài đặt dependencies
npm install

# 3. Chạy development server
npm start

### Mở http://localhost:3000 để xem ứng dụng.
### Các lệnh khác:

npm run build   # Build production
npm test        # Chạy test
```

### 📁 Cấu trúc dự án

```text
todo_mig_app/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```
