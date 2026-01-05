'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Trash2, Image as ImageIcon } from 'lucide-react';
import { categoryService } from '@/services/categoryService';
import { Database } from '@/types/database';

type Category = Database['public']['Tables']['categories']['Row'];

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Array of background colors to cycle through
    const bgColors = [
        'bg-blue-50',
        'bg-yellow-50',
        'bg-pink-50',
        'bg-green-50',
        'bg-purple-50',
        'bg-orange-50',
        'bg-cyan-50',
        'bg-amber-50',
        'bg-indigo-50',
        'bg-rose-50',
        'bg-teal-50',
        'bg-lime-50'
    ];

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        setLoading(true);
        setError(null);
        const { data, error } = await categoryService.getAll();

        if (error) {
            setError(error.message);
        } else {
            setCategories(data || []);
        }
        setLoading(false);
    };

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to delete "${name}"? This action cannot be undone.`)) return;

        const { error } = await categoryService.delete(id);

        if (error) {
            alert('Error deleting category: ' + error.message);
        } else {
            loadCategories();
        }
    };

    const getBgColor = (index: number) => {
        return bgColors[index % bgColors.length];
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="container-custom py-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Categories</h1>
                            <p className="text-gray-600 mt-2">Manage your product categories</p>
                        </div>
                        <Link
                            href="/admin/categories/new"
                            className="inline-flex items-center justify-center bg-almarai-green text-white px-6 py-3 rounded-lg hover:bg-almarai-green-dark transition-colors font-semibold shadow-sm"
                        >
                            <Plus className="mr-2 w-5 h-5" />
                            Add Category
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container-custom py-8">
                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-almarai-green"></div>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg text-center">
                        <p className="font-semibold mb-2">Error loading categories</p>
                        <p className="text-sm">{error}</p>
                        <button 
                            onClick={loadCategories}
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Categories Grid */}
                {!loading && !error && categories.length > 0 && (
                    <>
                        <div className="mb-6">
                            <p className="text-gray-600">
                                {categories.length} {categories.length === 1 ? 'category' : 'categories'} total
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categories.map((category, idx) => (
                                <div 
                                    key={category.id}
                                    className={`${getBgColor(idx)} rounded-lg overflow-hidden hover:shadow-xl transition-shadow`}
                                >
                                    <div className="p-6">
                                        {/* Category Image */}
                                        <div className="mb-4 w-full h-32 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                                            {category.image ? (
                                                <img 
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            ) : (
                                                <ImageIcon className="w-16 h-16 text-gray-300" />
                                            )}
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {category.name}
                                        </h3>
                                        
                                        {category.description && (
                                            <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3 text-sm">
                                                {category.description}
                                            </p>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 mt-4">
                                            <Link
                                                href={`/admin/categories/${category.id}`}
                                                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-almarai-green border-2 border-almarai-green rounded-lg hover:bg-almarai-green hover:text-white transition-colors font-semibold"
                                            >
                                                <Edit2 className="mr-2 w-4 h-4" />
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(category.id, category.name)}
                                                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors font-semibold"
                                            >
                                                <Trash2 className="mr-2 w-4 h-4" />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Empty State */}
                {!loading && !error && categories.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                        <div className="text-6xl mb-6">📁</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No Categories Yet</h3>
                        <p className="text-gray-600 mb-8">Get started by creating your first category</p>
                        <Link
                            href="/admin/categories/new"
                            className="inline-flex items-center justify-center bg-almarai-green text-white px-6 py-3 rounded-lg hover:bg-almarai-green-dark transition-colors font-semibold"
                        >
                            <Plus className="mr-2 w-5 h-5" />
                            Add Your First Category
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}