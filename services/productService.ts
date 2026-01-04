import { supabase } from '@/lib/supabase/client';
import { Product, ProductInsert, ProductUpdate } from '@/types/database';

export interface ProductWithCategory extends Product {
  categories: {
    id: string;
    name: string;
  } | null;
}

export const productService = {
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

  async create(product: ProductInsert): Promise<{ data: Product | null; error: any }> {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single();
    
    return { data, error };
  },

  async update(id: string, updates: ProductUpdate): Promise<{ data: Product | null; error: any }> {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    return { data, error };
  },

  async delete(id: string): Promise<{ error: any }> {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    
    return { error };
  }
};