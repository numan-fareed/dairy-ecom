'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
                {isNew ? 'Add Product' : 'Edit Product'}
            </h1>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category *
                    </label>
                    <select
                        required
                        value={formData.category_id || ''}
                        onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price *
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            required
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Stock
                        </label>
                        <input
                            type="number"
                            value={formData.stock || 0}
                            onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Unit (e.g., 1L, 500g)
                    </label>
                    <input
                        type="text"
                        value={formData.unit || ''}
                        onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        value={formData.description || ''}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={4}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Image URL
                    </label>
                    <input
                        type="url"
                        value={formData.image || ''}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="is_active"
                        checked={formData.is_active || false}
                        onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                        className="mr-2"
                    />
                    <label htmlFor="is_active" className="text-sm font-medium text-gray-700">
                        Active (visible to customers)
                    </label>
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                    >
                        {loading ? 'Saving...' : 'Save Product'}
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push('/admin/products')}
                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}