import { create } from 'zustand';
import { fetchMatchesAPI } from '../components/shared/api/matchApi';
import { Match } from '../types/match.types';

interface MatchesState {
    matches: Match[] | null;
    loading: boolean;
    error: string | null;
    lastFetched: number | null;
    fetchMatches: (force?: boolean) => Promise<void>;
}

export const useMatchesStore = create<MatchesState>((set, get) => ({
    matches: null,
    loading: false,
    error: null,
    lastFetched: null,
    fetchMatches: async (force = false) => {
        const { lastFetched, matches } = get();
        // Если данные уже загружены и не старше 60 сек, не делаем повторный запрос (если не принудительно)
        if (!force && matches && lastFetched && Date.now() - lastFetched < 60000) {
            return;
        }
        set({ loading: true, error: null });
        try {
            const data = await fetchMatchesAPI();
            set({ matches: data, loading: false, lastFetched: Date.now() });
        } catch (error) {
            console.error(error);
            set({ error: 'Ошибка: не удалось загрузить информацию', loading: false });
        }
    },
}));
