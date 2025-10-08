/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useCurrentUser.ts
'use client';
import { useEffect, useState } from 'react';

export const useCurrentUser = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/me`, {
                    credentials: 'include',
                });
                const data = await res.json();
                if (data.success) setUser(data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading };
};
