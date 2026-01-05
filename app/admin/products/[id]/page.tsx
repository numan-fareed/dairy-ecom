'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, X, Image as ImageIcon, DollarSign, Package } from 'lucide-react';
import Link from 'next/link';
import { productService } from '@/services/productService';
import { categoryService } from '@/services/categoryService';
import { Database } from '@/types/database';

type ProductInsert = Database['public']['Tables']['products']['Insert'];
type Category = Database['public']['Tables']['categories']['Row'];

export default function ProductFormPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const isNew = params.id === 'new';

    const [categories, setCategories] = useState<Category[]>([]);
    const [formData, setFormData] = useState<ProductInsert>({
        name: '',
        description: '',
        price: 0,
        category_id: '',
        image: '',
        stock: 0,
        unit: '',
        is_active: true
    });
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(!isNew);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadCategories();
        if (!isNew) {
            loadProduct();
        }
    }, [params.id]);

    const loadCategories = async () => {
        const { data } = await categoryService.getAll();
        setCategories(data || []);
    };

    const loadProduct = async () => {
        setInitialLoading(true);
        const { data, error } = await productService.getById(params.id);

        if (error) {
            setError(error.message);
        } else if (data) {
            setFormData({
                name: data.name,
                description: data.description,
                price: data.price,
                category_id: data.category_id,
                image: data.image,
                stock: data.stock,
                unit: data.unit,
                is_active: data.is_active
            });
        }
        setInitialLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = isNew
            ? await productService.create(formData)
            : await productService.update(params.id, formData);

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push('/admin/products');
        }
    };

    if (initialLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-almarai-green"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-almarai-green to-almarai-green-dark text-white py-12">
                <div className="container-custom">
                    <Link 
                        href="/admin/products" 
                        className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="mr-2 w-5 h-5" />
                        Back to Products
                    </Link>
                    
                    <h1 className="text-4xl md:text-5xl font-bold">
                        {isNew ? 'Add New Product' : 'Edit Product'}
                    </h1>
                    <p className="text-white/90 mt-2">
                        {isNew ? 'Add a new product to your inventory' : 'Update product information'}
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="container-custom py-8">
                <div className="max-w-4xl mx-auto">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6">
                            <p className="font-semibold">Error</p>
                            <p className="text-sm mt-1">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-8 space-y-6">
                            {/* Basic Information Section */}
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Package className="mr-2 w-6 h-6 text-almarai-green" />
                                    Basic Information
                                </h2>
                                
                                <div className="space-y-4">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Product Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="e.g., Fresh Whole Milk"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-almarai-green focus:border-transparent transition-all"
                                        />
                                    </div>

                                    {/* Category Field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Category *
                                        </label>
                                        <select
                                            required
                                            value={formData.category_id || ''}
                                            onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-almarai-green focus:border-transparent transition-all"
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                        {categories.length === 0 && (
                                            <p className="text-sm text-amber-600 mt-1">
                                                ⚠️ No categories available. Please create a category first.
                                            </p>
                                        )}
                                    </div>

                                    {/* Description Field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            value={formData.description || ''}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            rows={5}
                                            placeholder="Provide a detailed description of the product..."
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-almarai-green focus:border-transparent transition-all resize-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Pricing & Inventory Section */}
                            <div className="border-t border-gray-200 pt-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <DollarSign className="mr-2 w-6 h-6 text-almarai-green" />
                                    Pricing & Inventory
                                </h2>
                                
                                <div className="grid md:grid-cols-3 gap-4">
                                    {/* Price Field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Price *
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                required
                                                value={formData.price}
                                                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                                                placeholder="0.00"
                                                className="w-full border border-gray-300 rounded-lg pl-8 pr-4 py-3 focus:ring-2 focus:ring-almarai-green focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Stock Field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Stock Quantity
                                        </label>
                                        <input
                                            type="number"
                                            min="0"
                                            value={formData.stock || 0}
                                            onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                                            placeholder="0"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-almarai-green focus:border-transparent transition-all"
                                        />
                                    </div>

                                    {/* Unit Field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Unit
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.unit || ''}
                                            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                                            placeholder="e.g., 1L, 500g, kg"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-almarai-green focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="border-t border-gray-200 pt-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <ImageIcon className="mr-2 w-6 h-6 text-almarai-green" />
                                    Product Image
                                </h2>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Image URL
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.image || ''}
                                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                        placeholder="https://example.com/product-image.jpg"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-almarai-green focus:border-transparent transition-all"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Enter the URL of the product image
                                    </p>
                                </div>

                                {/* Image Preview */}
                                {formData.image && (
                                    <div className="mt-4">
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Image Preview
                                        </label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                                            <div className="w-full h-64 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                                                <img 
                                                    src={formData.image}
                                                    alt="Preview"
                                                    className="max-w-full max-h-full object-contain"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.parentElement!.innerHTML = '<div class="text-red-500 flex items-center gap-2"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Failed to load image</span></div>';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {!formData.image && (
                                    <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center">
                                        <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                        <p className="text-gray-500 text-sm">No image selected</p>
                                    </div>
                                )}
                            </div>

                            {/* Status Section */}
                            <div className="border-t border-gray-200 pt-6">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Product Status</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {formData.is_active 
                                                ? 'This product is visible to customers' 
                                                : 'This product is hidden from customers'}
                                        </p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.is_active || false}
                                            onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                                            className="sr-only peer"
                                        />
                                        <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-almarai-green/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-almarai-green"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900">
                                            {formData.is_active ? 'Active' : 'Inactive'}
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3 sm:justify-end">
                            <button
                                type="button"
                                onClick={() => router.push('/admin/products')}
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
                            >
                                <X className="mr-2 w-5 h-5" />
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center justify-center px-6 py-3 bg-almarai-green text-white rounded-lg font-semibold hover:bg-almarai-green-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save className="mr-2 w-5 h-5" />
                                        {isNew ? 'Create Product' : 'Save Changes'}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Help Text */}
                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-900 mb-2">💡 Tips for Adding Products</h3>
                        <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Use clear, descriptive product names that customers will recognize</li>
                            <li>• Select the appropriate category to help customers find your products</li>
                            <li>• Add detailed descriptions highlighting key features and benefits</li>
                            <li>• Use high-quality product images for better customer engagement</li>
                            <li>• Keep stock quantities updated to prevent overselling</li>
                            <li>• Specify units clearly (e.g., "1L", "500g", "per kg")</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}