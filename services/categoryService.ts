import { supabase } from '@/lib/supabase/client';
import { Category, CategoryInsert, CategoryUpdate } from '@/types/database';

export const categoryService = {
  async getAll(): Promise<{ data: Category[] | null; error: any }> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  async getById(id: string): Promise<{ data: Category | null; error: any }> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('id', id)
      .single();
    
    return { data, error };
  },

  async create(category: CategoryInsert): Promise<{ data: Category | null; error: any }> {
    const { data, error } = await supabase
      .from('categories')
      .insert(category)
      .select()
      .single();
    
    return { data, error };
  },

  async update(id: string, updates: CategoryUpdate): Promise<{ data: Category | null; error: any }> {
    const { data, error } = await supabase
      .from('categories')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    return { data, error };
  },

  async delete(id: string): Promise<{ error: any }> {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);
    
    return { error };
  }
};