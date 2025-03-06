import { useCallback, useEffect, useMemo, useRef } from "react";
import { useMatchesStore } from "../../../store/useMatchesStore";
import Loader from "../../ui/Loader";
import useWindowSize from "../../../hooks/useWindowSize";
import { toast } from "sonner";

const Header = () => {
    const { error, loading, fetchMatches } = useMatchesStore();

    const { width } = useWindowSize()

    const isMobile = useMemo(() => width <= 545, [width]);

    const notification = () => {
        toast.error("Ошибка: не удалось загрузить информацию");
    };

    const errorNotified = useRef(false);

    useEffect(() => {
        if (error && width <= 1000 && !errorNotified.current) {
            notification();
            errorNotified.current = true;
        }
        if (!error) {
            errorNotified.current = false;
        }
    }, [error, width]);

    const handleRefresh = useCallback(() => {
        fetchMatches(true);
    }, [fetchMatches]);

    return (
        <header
            className="flex items-center justify-between flex-wrap gap-[20px] min-h-[100px]"
            style={{
                justifyContent: isMobile ? "center" : "space-between"
            }}
        >
            <img src="logo.svg" />
            <div
                className="flex items-center gap-[12px]"
                style={{
                    width: isMobile ? "100%" : "",
                }}
            >
                {error && width > 1039 &&
                    <div
                        className="flex items-center justify-center bg-[#0F1318] w-[480px] h-[56px] p-4 rounded"
                    >
                        <p className="flex items-center gap-[10px] text-[#fff] font-medium">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0123 11.6852V14.0185M14.0123 18.6852V18.6968M5.84556 23.3518H22.1789C22.5596 23.3492 22.9338 23.2534 23.269 23.0729C23.6042 22.8923 23.8901 22.6325 24.1018 22.3161C24.3135 21.9997 24.4446 21.6363 24.4836 21.2576C24.5226 20.8789 24.4683 20.4964 24.3256 20.1435L16.0422 5.85185C15.8404 5.48714 15.5446 5.18315 15.1856 4.97146C14.8266 4.75978 14.4174 4.64813 14.0006 4.64813C13.5838 4.64813 13.1746 4.75978 12.8155 4.97146C12.4565 5.18315 12.1607 5.48714 11.9589 5.85185L3.67556 20.1435C3.53549 20.4884 3.47995 20.8617 3.51357 21.2324C3.54719 21.603 3.66899 21.9603 3.86882 22.2743C4.06864 22.5883 4.34069 22.85 4.66224 23.0374C4.98379 23.2249 5.34552 23.3327 5.71723 23.3518" stroke="#EB0237" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Ошибка: не удалось загрузить информацию
                        </p>
                    </div>
                }
                <button
                    onClick={handleRefresh}
                    className="flex items-center justify-center gap-[10px] min-w-[204px] 
                    h-[56px] bg-[#EB0237] transition-all hover:bg-[#701328] text-white 
                    font-semibold p-4 rounded cursor-pointer"
                    disabled={loading}
                    style={{
                        width: isMobile ? "100%" : "204px"
                    }}
                >
                    Обновить {loading && <Loader />}
                </button>
            </div>
        </header>
    );
}

export default Header;