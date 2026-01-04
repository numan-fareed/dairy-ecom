import { supabase } from '@/lib/supabase/client';
import { Database } from '@/types/database';

type Category = Database['public']['Tables']['categories']['Row'];
type CategoryInsert = Database['public']['Tables']['categories']['Insert'];
type CategoryUpdate = Database['public']['Tables']['categories']['Update'];

export const categoryService = {
    // Get all categories
    async getAll(): Promise<{ data: Category[] | null; error: any }> {
        const { data, error } = await supabase
            .from('categories')
            .select('*')
            .order('created_at', { ascending: false });

        return { data, error };
    },

    // Get single category by ID
    async getById(id: string): Promise<{ data: Category | null; error: any }> {
        const { data, error } = await supabase
            .from('categories')
            .select('*')
            .eq('id', id)
            .single();

        return { data, error };
    },

    // Create category
    async create(category: CategoryInsert): Promise<{ data: Category | null; error: any }> {
        const { data, error } = await supabase
            .from('categories')
            .insert(category)
            .select()
            .single();

        return { data, error };
    },

    // Update category
    async update(id: string, updates: CategoryUpdate): Promise<{ data: Category | null; error: any }> {
        const { data, error } = await supabase
            .from('categories')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        return { data, error };
    },

    // Delete category
    async delete(id: string): Promise<{ error: any }> {
        const { error } = await supabase
            .from('categories')
            .delete()
            .eq('id', id);

        return { error };
    }
};