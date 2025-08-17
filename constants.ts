import { Product, Customer, Employee, Expense, Income, Notification, Voucher, Bundle, PaymentSettings } from './types';

export const MOCK_VOUCHERS: Voucher[] = [
    { id: 1, code: 'HEMAT10K', type: 'fixed', value: 10000, minSpend: 50000, status: 'Aktif', applicableCategory: 'Makanan' },
    { id: 2, code: 'DISKON15', type: 'percentage', value: 15, minSpend: 100000, status: 'Aktif' },
    { id: 3, code: 'JAJANASIK', type: 'fixed', value: 5000, minSpend: 25000, status: 'Non-Aktif' },
    { id: 4, code: 'AYAMKRISPI', type: 'fixed', value: 3000, minSpend: 15000, status: 'Aktif', applicableProductIds: [5] },
];

export const MOCK_PRODUCTS: Product[] = [
    { id: 1, name: 'Air Mineral', price: 2500, category: 'Minuman Dingin', stock: 94, imageUrl: 'https://images.unsplash.com/photo-1587888191477-12a455a09f87?q=80&w=400', unit: 'Botol', description: 'Air mineral murni dari sumber pegunungan, menyegarkan dan menyehatkan.' },
    { id: 2, name: 'Ayam Bakar', price: 14000, category: 'Makanan', stock: 48, imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c7373b94?q=80&w=400', unit: 'Porsi', description: 'Ayam bakar dengan bumbu kecap manis meresap, disajikan dengan sambal khas.', discount: { type: 'fixed', value: 2000 } },
    { 
        id: 3, 
        name: 'Ayam Geprek', 
        price: 14000, 
        category: 'Makanan', 
        stock: 50, 
        imageUrl: 'https://images.unsplash.com/photo-1626082894332-b75a4eb3952d?q=80&w=400', 
        unit: 'Porsi', 
        description: 'Ayam goreng renyah yang digeprek dengan sambal bawang pedas dan nikmat.', 
        discount: { type: 'percentage', value: 10 },
        variations: [
            {
                name: 'Level Pedas',
                selectionType: 'single',
                required: true,
                options: [
                    { name: 'Tidak Pedas', priceAdjustment: 0 },
                    { name: 'Sedang', priceAdjustment: 0 },
                    { name: 'Pedas', priceAdjustment: 1000 },
                    { name: 'Extra Pedas', priceAdjustment: 2000 },
                ]
            },
            {
                name: 'Topping Tambahan',
                selectionType: 'multiple',
                required: false,
                options: [
                    { name: 'Keju Mozzarella', priceAdjustment: 5000 },
                    { name: 'Kremesan', priceAdjustment: 2000 },
                    { name: 'Telor Ceplok', priceAdjustment: 4000 },
                ]
            }
        ]
    },
    { id: 4, name: 'Ayam Goreng Biasa', price: 14000, category: 'Makanan', stock: 49, imageUrl: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=400', unit: 'Porsi', description: 'Ayam goreng klasik dengan bumbu rempah tradisional yang gurih.' },
    { id: 5, name: 'Ayam Goreng Krispi', price: 15000, category: 'Makanan', stock: 49, imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=400', unit: 'Porsi', description: 'Potongan ayam juicy dibalut tepung krispi yang renyah dan gurih.' },
    { id: 6, name: 'Ayam Kecap', price: 12000, category: 'Makanan', stock: 8, imageUrl: 'https://plus.unsplash.com/premium_photo-1695299533890-e55581b01777?q=80&w=400', unit: 'Porsi', description: 'Ayam masak kecap dengan kuah kental manis dan bumbu yang meresap sempurna.' },
    { id: 7, name: 'Ayam Lada Hitam', price: 12000, category: 'Makanan', stock: 5, imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400', unit: 'Porsi', description: 'Tumis ayam dengan saus lada hitam pedas-hangat dan paprika renyah.' },
    { id: 8, name: 'Ayam Pok Pok', price: 16000, category: 'Makanan', stock: 50, imageUrl: 'https://images.unsplash.com/photo-1606132024151-a5a2c9235f0f?q=80&w=400', unit: 'Porsi', description: 'Camilan ayam goreng tepung renyah, cocok dinikmati kapan saja.' },
    { id: 9, name: 'Ayam Rica Rica', price: 15000, category: 'Makanan', stock: 50, imageUrl: 'https://images.unsplash.com/photo-1574484284000-0196b3d5b530?q=80&w=400', unit: 'Porsi', description: 'Ayam dengan bumbu rica-rica pedas khas Manado yang menggugah selera.' },
    { id: 10, name: 'Hati Geprek', price: 10000, category: 'Makanan', stock: 50, imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=400', unit: 'Porsi', description: 'Hati ayam goreng yang digeprek dengan sambal pedas, lauk alternatif yang lezat.' },
    { id: 11, name: 'Hati Goreng', price: 10000, category: 'Makanan', stock: 50, imageUrl: 'https://images.unsplash.com/photo-1625944026242-a0a41f6e5228?q=80&w=400', unit: 'Porsi', description: 'Hati ayam goreng dengan bumbu sederhana yang gurih dan nikmat.' },
    { id: 12, name: 'Jeruk Dingin', price: 5000, category: 'Minuman Dingin', stock: 50, imageUrl: 'https://images.unsplash.com/photo-1613478334038-f2f567b51b3f?q=80&w=400', unit: 'Gelas', description: 'Es jeruk peras segar, kaya vitamin C untuk melepas dahaga.' },
];

export const MOCK_CUSTOMERS: Customer[] = [
    { id: 1, name: 'Budi Santoso', phone: '081234567890', address: 'Jl. Mawar No. 10, Jakarta', joinDate: '15/05/2023', transactionCount: 5, totalSpend: 250000 },
    { id: 2, name: 'Citra Lestari', phone: '085678901234', address: 'Jl. Melati No. 25, Bandung', joinDate: '20/06/2023', transactionCount: 8, totalSpend: 410000 },
    { id: 3, name: 'Dewi Anggraini', phone: '087812345678', address: 'Jl. Kenanga No. 5, Surabaya', joinDate: '01/07/2023', transactionCount: 2, totalSpend: 85000 },
    { id: 4, name: 'Eko Prasetyo', phone: '089956781234', address: 'Jl. Anggrek No. 12, Yogyakarta', joinDate: '10/08/2023', transactionCount: 12, totalSpend: 720000 },
];

export const MOCK_EMPLOYEES: Employee[] = [
    { id: 1, name: 'Admin Utama', role: 'Admin', status: 'Aktif' },
    { id: 2, name: 'Andi Wijaya', role: 'Kasir', status: 'Aktif' },
    { id: 3, name: 'Siti Aminah', role: 'Kasir', status: 'Non-Aktif' },
];

export const MOCK_EXPENSES: Expense[] = [
    { id: 1, description: 'Sewa Tempat Bulan Juli', amount: 1500000, date: '01/07/2024', category: 'Operasional' },
    { id: 2, description: 'Pembelian Stok Ayam', amount: 750000, date: '02/07/2024', category: 'Bahan Baku' },
    { id: 3, description: 'Pembelian Bumbu Dapur', amount: 300000, date: '02/07/2024', category: 'Bahan Baku' },
    { id: 4, description: 'Tagihan Listrik', amount: 450000, date: '05/07/2024', category: 'Operasional' },
    { id: 5, description: 'Gaji Karyawan', amount: 2500000, date: '25/07/2024', category: 'Gaji' },
];

export const MOCK_INCOMES: Income[] = [
    { id: 1, description: 'Kas Awal / Modal', amount: 5000000, date: '01/07/2024', category: 'Modal Awal' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
    {
        id: 1,
        type: 'stok',
        title: 'Stok Rendah',
        message: 'Stok untuk "Ayam Kecap" tersisa 8 porsi. Segera restock.',
        timestamp: '5 menit lalu',
        read: false,
    },
    {
        id: 2,
        type: 'stok',
        title: 'Stok Rendah',
        message: 'Stok "Ayam Lada Hitam" menipis, hanya tersisa 5 porsi.',
        timestamp: '1 jam lalu',
        read: false,
    },
    {
        id: 3,
        type: 'laporan',
        title: 'Laporan Harian Siap',
        message: 'Laporan penjualan untuk kemarin telah dibuat.',
        timestamp: '8 jam lalu',
        read: true,
    },
    {
        id: 4,
        type: 'sistem',
        title: 'Pembaruan Sistem',
        message: 'Aplikasi telah diperbarui ke versi 1.1.0 dengan fitur baru.',
        timestamp: '2 hari lalu',
        read: true,
    },
    {
        id: 5,
        type: 'promo',
        title: 'Promo Akhir Pekan',
        message: 'Jangan lupa aktifkan promo diskon 15% untuk akhir pekan ini.',
        timestamp: '3 hari lalu',
        read: true,
    },
];

export const DEFAULT_BUNDLE_IMAGE_URL = 'https://images.unsplash.com/photo-1555243896-c709b02b2790?q=80&w=400';

export const MOCK_BUNDLES: Bundle[] = [
    {
        id: 1,
        name: 'Paket Kenyang Ayam Bakar',
        price: 15000,
        products: [
            { productId: 2, quantity: 1 }, // Ayam Bakar
            { productId: 1, quantity: 1 }  // Air Mineral
        ],
        status: 'Aktif',
        imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c7373b94?q=80&w=400',
    },
    {
        id: 2,
        name: 'Paket Double Geprek',
        price: 25000,
        products: [
            { productId: 3, quantity: 2 } // Ayam Geprek
        ],
        status: 'Aktif',
        imageUrl: 'https://images.unsplash.com/photo-1626082894332-b75a4eb3952d?q=80&w=400',
    },
     {
        id: 3,
        name: 'Paket Krispi Hemat',
        price: 18000,
        products: [
            { productId: 5, quantity: 1 }, // Ayam Goreng Krispi
            { productId: 12, quantity: 1 } // Jeruk Dingin
        ],
        status: 'Non-Aktif',
        imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=400',
    }
];

export const MOCK_PAYMENT_SETTINGS: PaymentSettings = {
  activeMethods: ['Tunai', 'QRIS', 'Kartu Debit'],
  qris: {
    merchantName: 'POSku!',
    enabled: true,
  },
  bankAccounts: [
    { id: 1, bankName: 'BCA', accountNumber: '1234567890', accountHolderName: 'Admin Utama' },
    { id: 2, bankName: 'Mandiri', accountNumber: '0987654321', accountHolderName: 'Admin Utama' },
  ]
};