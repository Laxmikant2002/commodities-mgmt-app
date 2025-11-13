// Mock API for testing without backend server
// This simulates real API calls with local data storage

// Mock user credentials
const mockUsers = {
  'manager@slooze.com': {
    email: 'manager@slooze.com',
    password: 'manager123',
    role: 'Manager',
    token: 'mock-jwt-token-manager-xyz123'
  },
  'keeper@slooze.com': {
    email: 'keeper@slooze.com',
    password: 'keeper123',
    role: 'Store Keeper',
    token: 'mock-jwt-token-keeper-abc456'
  }
};

// Mock products database
let mockProducts = [
  { 
    id: 1, 
    name: 'Premium Coffee Beans', 
    category: 'Food', 
    price: 24.99, 
    stock: 45, 
    description: 'Organic Arabica coffee beans from Colombia' 
  },
  { 
    id: 2, 
    name: 'Wireless Headphones', 
    category: 'Electronics', 
    price: 89.99, 
    stock: 23, 
    description: 'Bluetooth 5.0 with noise cancellation' 
  },
  { 
    id: 3, 
    name: 'Yoga Mat', 
    category: 'Sports', 
    price: 29.99, 
    stock: 8, 
    description: 'Non-slip eco-friendly yoga mat' 
  },
  { 
    id: 4, 
    name: 'Office Chair', 
    category: 'Furniture', 
    price: 249.99, 
    stock: 12, 
    description: 'Ergonomic office chair with lumbar support' 
  },
  { 
    id: 5, 
    name: 'Cotton T-Shirt', 
    category: 'Clothing', 
    price: 19.99, 
    stock: 67, 
    description: '100% organic cotton comfortable t-shirt' 
  },
  { 
    id: 6, 
    name: 'LED Desk Lamp', 
    category: 'Electronics', 
    price: 34.99, 
    stock: 18, 
    description: 'Adjustable brightness LED lamp' 
  },
  { 
    id: 7, 
    name: 'Protein Powder', 
    category: 'Food', 
    price: 39.99, 
    stock: 5, 
    description: 'Whey protein isolate 2lb' 
  },
  { 
    id: 8, 
    name: 'Running Shoes', 
    category: 'Sports', 
    price: 79.99, 
    stock: 28, 
    description: 'Lightweight cushioned running shoes' 
  }
];

// Simulate network delay
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Authentication API
export const mockAuthAPI = {
  login: async (credentials) => {
    await delay();
    
    const user = mockUsers[credentials.email];
    
    if (!user) {
      throw new Error('User not found. Please check your email.');
    }
    
    if (user.password !== credentials.password) {
      throw new Error('Invalid password. Please try again.');
    }
    
    return {
      email: user.email,
      role: user.role,
      token: user.token
    };
  }
};

// Products API
export const mockProductsAPI = {
  getAll: async () => {
    await delay();
    return [...mockProducts];
  },

  getById: async (id) => {
    await delay();
    const product = mockProducts.find(p => p.id === parseInt(id));
    
    if (!product) {
      throw new Error('Product not found');
    }
    
    return { ...product };
  },

  create: async (productData) => {
    await delay();
    
    const newProduct = {
      id: Math.max(...mockProducts.map(p => p.id), 0) + 1,
      ...productData,
      price: parseFloat(productData.price),
      stock: parseInt(productData.stock)
    };
    
    mockProducts.push(newProduct);
    return newProduct;
  },

  update: async (id, productData) => {
    await delay();
    
    const index = mockProducts.findIndex(p => p.id === parseInt(id));
    
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    mockProducts[index] = {
      ...mockProducts[index],
      ...productData,
      id: parseInt(id),
      price: parseFloat(productData.price),
      stock: parseInt(productData.stock)
    };
    
    return mockProducts[index];
  },

  delete: async (id) => {
    await delay();
    
    const index = mockProducts.findIndex(p => p.id === parseInt(id));
    
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    mockProducts.splice(index, 1);
    return { success: true, message: 'Product deleted successfully' };
  }
};

// Dashboard API
export const mockDashboardAPI = {
  getStats: async () => {
    await delay();
    
    const totalProducts = mockProducts.length;
    const totalRevenue = mockProducts.reduce((sum, p) => sum + (p.price * p.stock), 0);
    const lowStockCount = mockProducts.filter(p => p.stock < 10).length;
    const categories = [...new Set(mockProducts.map(p => p.category))];
    
    return {
      totalProducts,
      totalRevenue: totalRevenue.toFixed(2),
      lowStockCount,
      categoriesCount: categories.length,
      recentActivities: [
        { action: 'Product "Premium Coffee Beans" stock updated', timestamp: '2 hours ago' },
        { action: 'New product "Running Shoes" added', timestamp: '5 hours ago' },
        { action: 'Product "Yoga Mat" price updated', timestamp: '1 day ago' },
        { action: 'Low stock alert: Protein Powder', timestamp: '2 days ago' }
      ],
      topProducts: mockProducts
        .sort((a, b) => (b.price * b.stock) - (a.price * a.stock))
        .slice(0, 5)
        .map(p => ({
          name: p.name,
          revenue: (p.price * p.stock).toFixed(2)
        })),
      categoryBreakdown: categories.map(cat => ({
        category: cat,
        count: mockProducts.filter(p => p.category === cat).length
      }))
    };
  }
};
