import React, { useEffect, useMemo } from 'react';
import { useMatchesStore } from '../../../store/useMatchesStore';
import MatchItem from '../../shared/match-items/MatchItem';

const MatchTracker: React.FC = () => {
    const { matches, fetchMatches } = useMatchesStore();

    useEffect(() => {
        fetchMatches();
    }, [fetchMatches]);

    const matchList = useMemo(() => {
        return matches?.map(match => (
            <MatchItem key={match.title + match.time} match={match} />
        ));
    }, [matches]);

    return (
        <div className='flex flex-col gap-3'>
            {matches && matchList}
        </div>
    );
};

export default MatchTracker;
