import { useEffect, useState, useCallback } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const updateSize = useCallback((entries: ResizeObserverEntry[]) => {
        const { clientWidth, clientHeight } = entries[0].target;

        setWindowSize((prevSize) =>
            prevSize.width !== clientWidth || prevSize.height !== clientHeight
                ? { width: clientWidth, height: clientHeight }
                : prevSize
        );
    }, []);

    useEffect(() => {
        const rootElement = document.getElementById('root');
        if (!rootElement) return;

        const resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(rootElement);

        return () => resizeObserver.disconnect();
    }, [updateSize]);

    return windowSize;
}

export default useWindowSize
