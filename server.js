const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Mengizinkan request dari mana saja (CORS)
app.use(cors());
app.use(express.json());

// Data Analitik (Mock)
const mockData = {
  summary: {
    totalFollowers: 128450,
    totalEngagement: 24300,
    totalPosts: 412,
    avgReach: 18500
  },
  chartData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
    instagram: [12000, 19000, 23000, 28000, 35000, 40000, 45200],
    twitter: [20000, 22000, 25000, 27000, 29000, 31000, 32100],
    youtube: [25000, 28000, 32000, 38000, 42000, 47000, 51150]
  },
  recentPosts: [
    { platform: 'Instagram', title: 'Peluncuran Fitur Baru', likes: 1240, comments: 85, date: '2026-08-15' },
    { platform: 'YouTube', title: 'Tutorial Fullstack Web App', likes: 3400, comments: 210, date: '2026-08-12' },
    { platform: 'Twitter/X', title: 'Update Pengumuman Sistem', likes: 450, comments: 32, date: '2026-08-10' }
  ]
};

// Endpoint API
app.get('/api/analytics', (req, res) => {
  res.json({
    success: true,
    data: mockData,
    updatedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
