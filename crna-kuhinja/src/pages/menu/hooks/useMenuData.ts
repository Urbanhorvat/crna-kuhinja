import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface MenuItem {
  id: number;
  category_id: number;
  name_sl: string;
  name_en: string | null;
  name_de: string | null;
  description_sl: string | null;
  description_en: string | null;
  description_de: string | null;
  price: number | null;
  allergens: string[] | null;
  dietary: string[] | null;
  image_url: string | null;
}

export interface MenuCategory {
  id: number;
  name_sl: string;
  name_en: string | null;
  name_de: string | null;
  sort_order: number;
  items: MenuItem[];
}

export function useMenuData() {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const { data: cats, error: catError } = await supabase
        .from('menu_categories')
        .select('id, name_sl, name_en, name_de, sort_order')
        .order('sort_order', { ascending: true });

      if (catError) throw catError;

      const { data: items, error: itemError } = await supabase
        .from('menu_items')
        .select(
          'id, category_id, name_sl, name_en, name_de, description_sl, description_en, description_de, price, allergens, dietary, image_url',
        )
        .order('sort_order', { ascending: true });

      if (itemError) throw itemError;

      const list = (items ?? []) as MenuItem[];
      const mapped: MenuCategory[] = ((cats ?? []) as Omit<MenuCategory, 'items'>[]).map((c) => ({
        ...c,
        items: list.filter((i) => i.category_id === c.id),
      }));

      setCategories(mapped);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);

  return { categories, totalItems, loading, error, reload: load };
}