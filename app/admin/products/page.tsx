'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Trash2, Image as ImageIcon, Package, DollarSign } from 'lucide-react';
import { productService, ProductWithCategory } from '@/services/productService';

export default function ProductsPage() {
    const [products, setProducts] = useState<ProductWithCategory[]>([]);
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
        loadProducts();
    }, []);

    const loadProducts = async () => {
        setLoading(true);
        setError(null);
        const { data, error } = await productService.getAll();

        if (error) {
            setError(error.message);
        } else {
            setProducts(data || []);
        }
        setLoading(false);
    };

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to delete "${name}"? This action cannot be undone.`)) return;

        const { error } = await productService.delete(id);

        if (error) {
            alert('Error deleting product: ' + error.message);
        } else {
            loadProducts();
        }
    };

    const getBgColor = (index: number) => {
        return bgColors[index % bgColors.length];
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="container-custom py-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Products</h1>
                            <p className="text-gray-600 mt-2">Manage your product inventory</p>
                        </div>
                        <Link
                            href="/admin/products/new"
                            className="inline-flex items-center justify-center bg-almarai-green text-white px-6 py-3 rounded-lg hover:bg-almarai-green-dark transition-colors font-semibold shadow-sm"
                        >
                            <Plus className="mr-2 w-5 h-5" />
                            Add Product
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
                        <p className="font-semibold mb-2">Error loading products</p>
                        <p className="text-sm">{error}</p>
                        <button 
                            onClick={loadProducts}
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Products Grid */}
                {!loading && !error && products.length > 0 && (
                    <>
                        <div className="mb-6">
                            <p className="text-gray-600">
                                {products.length} {products.length === 1 ? 'product' : 'products'} total
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product, idx) => (
                                <div 
                                    key={product.id}
                                    className={`${getBgColor(idx)} rounded-lg overflow-hidden hover:shadow-xl transition-shadow`}
                                >
                                    <div className="p-6">
                                        {/* Product Image */}
                                        <div className="mb-4 w-full h-40 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                                            {product.image ? (
                                                <img 
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            ) : (
                                                <ImageIcon className="w-16 h-16 text-gray-300" />
                                            )}
                                        </div>
                                        
                                        {/* Product Info */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {product.name}
                                        </h3>
                                        
                                        {product.description && (
                                            <p className="text-gray-700 mb-3 leading-relaxed line-clamp-2 text-sm">
                                                {product.description}
                                            </p>
                                        )}

                                        {/* Category Badge */}
                                        {product.categories?.name && (
                                            <div className="mb-3">
                                                <span className="inline-block px-3 py-1 bg-white/70 text-gray-700 rounded-full text-xs font-semibold">
                                                    {product.categories.name}
                                                </span>
                                            </div>
                                        )}

                                        {/* Price and Stock */}
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-1">
                                                <DollarSign className="w-5 h-5 text-almarai-green" />
                                                <span className="text-2xl font-bold text-almarai-green">
                                                    {formatPrice(product.price)}
                                                </span>
                                                {product.unit && (
                                                    <span className="text-sm text-gray-600">
                                                        / {product.unit}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-4">
                                            <Package className="w-4 h-4 text-gray-500" />
                                            <span className={`text-sm font-semibold ${
                                                product.stock && product.stock > 0 
                                                    ? 'text-green-600' 
                                                    : 'text-red-600'
                                            }`}>
                                                {product.stock !== null && product.stock !== undefined
                                                    ? `Stock: ${product.stock}`
                                                    : 'No stock info'
                                                }
                                            </span>
                                            <span className={`ml-auto px-2 py-1 text-xs rounded-full font-semibold ${
                                                product.is_active 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-gray-200 text-gray-700'
                                            }`}>
                                                {product.is_active ? 'Active' : 'Inactive'}
                                            </span>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <Link
                                                href={`/admin/products/${product.id}`}
                                                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-almarai-green border-2 border-almarai-green rounded-lg hover:bg-almarai-green hover:text-white transition-colors font-semibold"
                                            >
                                                <Edit2 className="mr-2 w-4 h-4" />
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(product.id, product.name)}
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
                {!loading && !error && products.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                        <div className="text-6xl mb-6">📦</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Yet</h3>
                        <p className="text-gray-600 mb-8">Get started by adding your first product</p>
                        <Link
                            href="/admin/products/new"
                            className="inline-flex items-center justify-center bg-almarai-green text-white px-6 py-3 rounded-lg hover:bg-almarai-green-dark transition-colors font-semibold"
                        >
                            <Plus className="mr-2 w-5 h-5" />
                            Add Your First Product
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}