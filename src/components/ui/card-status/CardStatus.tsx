import { cardColor } from "./cardColor";

interface ICardStatusProps {
    status: string;
}

const CardStatus: React.FC<ICardStatusProps> = ({ status }) => {

    const { bgColor, status: cardStatus } = cardColor(status);

    return (
        <div
            className={`${bgColor} py-[6px] px-[8px] rounded`}
            style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                minWidth: "clamp(70px, 10vw, 92px)"
            }}
        >
            <p className="text-center text-white font-semibold text-[12px]">{cardStatus}</p>
        </div>
    );
}

export default CardStatus;