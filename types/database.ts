export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            categories: {
                Row: {
                    id: string
                    name: string
                    description: string | null
                    image: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    description?: string | null
                    image?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    description?: string | null
                    image?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            products: {
                Row: {
                    id: string
                    category_id: string | null
                    name: string
                    description: string | null
                    price: number
                    image: string | null
                    stock: number | null
                    unit: string | null
                    is_active: boolean | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    category_id?: string | null
                    name: string
                    description?: string | null
                    price: number
                    image?: string | null
                    stock?: number | null
                    unit?: string | null
                    is_active?: boolean | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    category_id?: string | null
                    name?: string
                    description?: string | null
                    price?: number
                    image?: string | null
                    stock?: number | null
                    unit?: string | null
                    is_active?: boolean | null
                    created_at?: string
                    updated_at?: string
                }
            }
        }
    }
}