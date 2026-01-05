'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, X, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { categoryService } from '@/services/categoryService';
import { Database } from '@/types/database';

type CategoryInsert = Database['public']['Tables']['categories']['Insert'];

export default function CategoryFormPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const isNew = params.id === 'new';

    const [formData, setFormData] = useState<CategoryInsert>({
        name: '',
        description: '',
        image: ''
    });
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(!isNew);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isNew) {
            loadCategory();
        }
    }, [params.id]);

    const loadCategory = async () => {
        setInitialLoading(true);
        const { data, error } = await categoryService.getById(params.id);

        if (error) {
            setError(error.message);
        } else if (data) {
            setFormData({
                name: data.name,
                description: data.description,
                image: data.image
            });
        }
        setInitialLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = isNew
            ? await categoryService.create(formData)
            : await categoryService.update(params.id, formData);

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push('/admin/categories');
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
                        href="/admin/categories" 
                        className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="mr-2 w-5 h-5" />
                        Back to Categories
                    </Link>
                    
                    <h1 className="text-4xl md:text-5xl font-bold">
                        {isNew ? 'Add New Category' : 'Edit Category'}
                    </h1>
                    <p className="text-white/90 mt-2">
                        {isNew ? 'Create a new product category' : 'Update category information'}
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="container-custom py-8">
                <div className="max-w-3xl mx-auto">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6">
                            <p className="font-semibold">Error</p>
                            <p className="text-sm mt-1">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-8 space-y-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Category Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="e.g., Dairy Products, Fresh Vegetables"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-almarai-green focus:border-transparent transition-all"
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    Choose a clear, descriptive name for your category
                                </p>
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
                                    placeholder="Provide a detailed description of this category..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-almarai-green focus:border-transparent transition-all resize-none"
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    This will be displayed on the category page
                                </p>
                            </div>

                            {/* Image URL Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    value={formData.image || ''}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-almarai-green focus:border-transparent transition-all"
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    Enter the URL of the category image
                                </p>
                            </div>

                            {/* Image Preview */}
                            {formData.image && (
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Image Preview
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                                        <div className="w-full h-48 bg-white rounded-lg overflow-hidden flex items-center justify-center">
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
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center">
                                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500 text-sm">No image selected</p>
                                </div>
                            )}
                        </div>

                        {/* Form Actions */}
                        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3 sm:justify-end">
                            <button
                                type="button"
                                onClick={() => router.push('/admin/categories')}
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
                                        {isNew ? 'Create Category' : 'Save Changes'}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Help Text */}
                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-900 mb-2">💡 Tips</h3>
                        <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Use descriptive names that customers will easily understand</li>
                            <li>• Add detailed descriptions to help customers find what they need</li>
                            <li>• Use high-quality images that represent the category well</li>
                            <li>• Keep image URLs accessible and avoid broken links</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}