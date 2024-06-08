"use client"

interface SupabaseProviderProps {
    children: React.ReactNode;
}

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useState } from 'react'
import { Database } from '@/types_db';

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({children}) => {
    const [supabaseClient] = useState(() => createClientComponentClient<Database>())
  return (
    
    <div></div>
  )
}
