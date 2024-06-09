"use client"

interface SupabaseProviderProps {
    children: React.ReactNode;
}

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useState } from 'react'
import { Database } from '@/types_db';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({children}) => {
    const [supabaseClient] = useState(() => createClientComponentClient<Database>())
  return (
    
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
}

export default SupabaseProvider;
