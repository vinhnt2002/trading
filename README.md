# Trading Web Dashboard

Một ứng dụng web trading dashboard được xây dựng với Next.js, TypeScript, Tailwind CSS, và shadcn/ui - nâng cấp từ Telegram Bot thành web application với giao diện tương tác phong phú.

## 🚀 Công Nghệ Sử Dụng

- **Next.js 15** - React framework với App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Modern CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icons

## 🎯 Tính Năng Chính

### 1. Dashboard Tổng Quan
- **Live P&L tracking** - Theo dõi lãi/lỗ thời gian thực
- **Win Rate visualization** - Tỷ lệ thắng với progress bars
- **Psychology Score** - Điểm số tâm lý trading
- **Active Trades** - Vị thế đang mở

### 2. Psychology Analysis 🧠
- **Interactive emotion wheel** - Chọn cảm xúc bằng click
- **Visual mood calendar** - Heatmap cảm xúc theo ngày
- **Psychology pattern charts** - Đồ thị cảm xúc vs hiệu suất
- **AI coaching dashboard** - Hướng dẫn với images và charts
- **Emotion timeline** - Hành trình phát triển cảm xúc

### 3. Quick Stats 📊
- **Live dashboard với gauges** - Win rate, profit factor dials
- **Interactive profit/loss charts** - Hover để xem chi tiết
- **Performance comparison tools** - So sánh tháng này vs tháng trước
- **Streak visualizations** - Chuỗi thắng/thua trực quan
- **KPI cards** - Metric cards đẹp với progress bars

### 4. Market Check ⚡
- **Real-time price charts** - TradingView-style charts
- **Multi-timeframe analysis** - Chuyển đổi 1H, 4H, 1D
- **Technical indicator overlays** - RSI, MACD, Bollinger Bands
- **Market screener** - Bảng với sortable columns
- **Watchlist management** - Lưu và theo dõi pairs yêu thích

### 5. Trade Journal 📓
- **Advanced filtering system** - Date range, pairs, outcomes
- **Visual trade timeline** - Gantt chart của trades
- **Trade detail modals** - Rich popups với screenshots
- **Export capabilities** - PDF reports, CSV data
- **Search functionality** - Tìm trades theo setup, notes
- **Bulk operations** - Chỉnh sửa nhiều trades cùng lúc

### 6. Market News 📰
- **News aggregation dashboard** - Nhiều nguồn tin
- **Sentiment analysis** - Tác động tin tức lên tâm lý
- **Calendar integration** - Lịch sự kiện kinh tế
- **News correlation** - Tin tức ảnh hưởng trading như thế nào
- **Personalized feed** - Tin tức liên quan đến pairs của bạn

## 🛠️ Cài Đặt

### Prerequisites
- Node.js 18+ 
- npm hoặc yarn

### Bước 1: Clone và cài đặt dependencies
\`\`\`bash
git clone <repository-url>
cd trading_web
npm install
\`\`\`

### Bước 2: Chạy development server
\`\`\`bash
npm run dev
\`\`\`

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

### Bước 3: Build cho production
\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Cấu Trúc Dự Án

\`\`\`
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Trang chính
│   ├── layout.tsx         # Layout root
│   └── globals.css        # Global styles với shadcn/ui variables
├── components/
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── tabs.tsx
│   │   └── progress.tsx
│   ├── dashboard/         # Dashboard components
│   │   └── overview-cards.tsx
│   ├── psychology/        # Psychology analysis components
│   │   └── emotion-tracker.tsx
│   └── trading/          # Trading related components
│       └── recent-trades.tsx
└── lib/
    └── utils.ts          # Utility functions (cn, etc.)
\`\`\`

## 🎨 Thiết Kế UI/UX

### Dashboard Themes
- **Professional mode** - Giao diện sạch, business-oriented
- **Psychology focus** - Màu ấm, layout tập trung cảm xúc
- **Performance mode** - Nhiều metric, data-driven interface
- **Minimalist** - Sạch, không phân tâm

### Tương Tác Nâng Cao
- **Hover details** - Thông tin tức thì không cần click
- **Drag & drop** - Sắp xếp dashboard, upload screenshots
- **Keyboard shortcuts** - Navigation cho power users
- **Right-click menus** - Context-sensitive actions
- **Zoom & pan** - Khám phá charts chi tiết

## 🔄 Roadmap

### Phase 1 (Hoàn thành)
- ✅ Setup Next.js + TypeScript + Tailwind + shadcn/ui
- ✅ Basic dashboard layout
- ✅ Components structure
- ✅ UI components integration

### Phase 2 (Tiếp theo)
- 🔲 Real-time data integration
- 🔲 Psychology analysis tools
- 🔲 Interactive charts
- 🔲 Advanced filtering
- 🔲 Export functionality

### Phase 3 (Tương lai)
- 🔲 AI coaching integration
- 🔲 Social features
- 🔲 Mobile responsiveness
- 🔲 Progressive Web App
- 🔲 Offline capabilities

## 🤝 Đóng Góp

1. Fork project
2. Tạo feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to branch (\`git push origin feature/AmazingFeature\`)
5. Mở Pull Request

## 📝 License

Distributed under the MIT License. See \`LICENSE\` for more information.

## 📞 Liên Hệ

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/trading_web](https://github.com/yourusername/trading_web)
#   t r a d i n g  
 