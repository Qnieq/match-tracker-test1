import React, { memo } from 'react';
import { Match } from '../../../types/match.types';
import CardStatus from '../../ui/card-status/CardStatus';

interface MatchItemProps {
    match: Match;
}

const MatchItem: React.FC<MatchItemProps> = memo(({ match }) => {
    return (
        <div className="bg-[#0B0E12] w-full rounded shadow p-4">
            <div className="flex justify-between">
                <div
                    className='flex items-center justify-center'
                    style={{
                        gap: "clamp(5px, 2vw, 14px)"
                    }}
                >
                    <img
                        src="/icons/team.svg"
                        alt=""
                        style={{
                            width: "clamp(28px, 5vw, 40px)"
                        }}
                    />
                    <p
                        className="font-semibold text-[#fff] text-[16px]"
                        style={{
                            fontSize: "clamp(14px, 2vw, 16px)"
                        }}
                    >
                        {match.awayTeam.name}
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <p
                        className="font-semibold text-[#fff]"
                        style={{
                            fontSize: "clamp(14px, 3vw, 20px)"
                        }}
                    >
                        {match.awayScore} : {match.homeScore}
                    </p>
                    <CardStatus status={match.status} />
                </div>
                <div
                    className='flex items-center justify-center'
                    style={{
                        gap: "clamp(5px, 2vw, 14px)"
                    }}
                >
                    <p
                        className="font-semibold text-[#fff]"
                        style={{
                            fontSize: "clamp(14px, 2vw, 16px)"
                        }}
                    >
                        {match.homeTeam.name}
                    </p>
                    <img
                        src="/icons/team.svg"
                        alt=""
                        style={{
                            width: "clamp(28px, 5vw, 40px)"
                        }}
                    />
                </div>
            </div>
        </div>
    );
});

export default MatchItem;
