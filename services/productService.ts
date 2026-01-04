import { supabase } from '@/lib/supabase/client';
import { Database } from '@/types/database';

type Product = Database['public']['Tables']['products']['Row'];
type ProductInsert = Database['public']['Tables']['products']['Insert'];
type ProductUpdate = Database['public']['Tables']['products']['Update'];

export interface ProductWithCategory extends Product {
    categories: {
        id: string;
        name: string;
    } | null;
}

export const productService = {
    // Get all products with category info
    async getAll(): Promise<{ data: ProductWithCategory[] | null; error: any }> {
        const { data, error } = await supabase
            .from('products')
            .select(`
        *,
        categories (
          id,
          name
        )
      `)
            .order('created_at', { ascending: false });

        return { data, error };
    },

    // Get products by category
    async getByCategory(categoryId: string): Promise<{ data: ProductWithCategory[] | null; error: any }> {
        const { data, error } = await supabase
            .from('products')
            .select(`
        *,
        categories (
            id,
          name
        )
      `)
            .eq('category_id', categoryId)
            .order('created_at', { ascending: false });

        return { data, error };
    },

    // Get single product
    async getById(id: string): Promise<{ data: ProductWithCategory | null; error: any }> {
        const { data, error } = await supabase
            .from('products')
            .select(`
        *,
        categories (
            id,
            name
        )
    `)
            .eq('id', id)
            .single();

        return { data, error };
    },

    // Create product
    async create(product: ProductInsert): Promise<{ data: Product | null; error: any }> {
        const { data, error } = await supabase
            .from('products')
            .insert(product)
            .select()
            .single();

        return { data, error };
    },

    // Update product
    async update(id: string, updates: ProductUpdate): Promise<{ data: Product | null; error: any }> {
        const { data, error } = await supabase
            .from('products')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        return { data, error };
    },

    // Delete product
    async delete(id: string): Promise<{ error: any }> {
        const { error } = await supabase
            .from('products')
            .delete()
            .eq('id', id);

        return { error };
    }
};