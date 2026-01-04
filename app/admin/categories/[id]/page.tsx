'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isNew) {
            loadCategory();
        }
    }, [params.id]);

    const loadCategory = async () => {
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

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
                {isNew ? 'Add Category' : 'Edit Category'}
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

                <div className="flex gap-4 pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                    >
                        {loading ? 'Saving...' : 'Save Category'}
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push('/admin/categories')}
                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}