// Simplified type definitions
export interface Category {
    id: string;
    name: string;
    description: string | null;
    image: string | null;
    created_at: string;
    updated_at: string;
  }
  
  export interface CategoryInsert {
    id?: string;
    name: string;
    description?: string | null;
    image?: string | null;
  }
  
  export interface CategoryUpdate {
    name?: string;
    description?: string | null;
    image?: string | null;
  }
  
  export interface Product {
    id: string;
    category_id: string | null;
    name: string;
    description: string | null;
    price: number;
    image: string | null;
    stock: number | null;
    unit: string | null;
    is_active: boolean | null;
    created_at: string;
    updated_at: string;
  }
  
  export interface ProductInsert {
    id?: string;
    category_id?: string | null;
    name: string;
    description?: string | null;
    price: number;
    image?: string | null;
    stock?: number | null;
    unit?: string | null;
    is_active?: boolean | null;
  }
  
  export interface ProductUpdate {
    category_id?: string | null;
    name?: string;
    description?: string | null;
    price?: number;
    image?: string | null;
    stock?: number | null;
    unit?: string | null;
    is_active?: boolean | null;
  }