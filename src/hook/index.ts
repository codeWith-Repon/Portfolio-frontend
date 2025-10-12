/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { useEffect, useState } from 'react';

export const useCurrentUser = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('accessToken');

            if (!token) {
                setLoading(false);
                setUser(null);
                return;
            }
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/me`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
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
