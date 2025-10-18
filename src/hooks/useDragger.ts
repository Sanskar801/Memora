import { useEffect, useRef } from 'react'

function useDragger( id: string | undefined): void {

    const isClicked = useRef<boolean>(false);

    const coords = useRef<{
        startX: number,
        startY: number,
        lastX: number,
        lastY: number
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    })

    useEffect(() => {
        
        const targetElement = document.getElementById(id || '');
        if (!targetElement) throw new Error('Element not found');
        
        const container = targetElement.parentElement;
        if (!container) throw new Error('Element must have a parent element');

        // Set initial position
        targetElement.style.position = 'absolute';
        targetElement.style.cursor = 'grab';

        // Initialize lastX and lastY with current position
        coords.current.lastX = targetElement.offsetLeft;
        coords.current.lastY = targetElement.offsetTop;

        const handleMouseDown = (e: MouseEvent) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
            targetElement.style.cursor = 'grabbing';
        }

        const handleMouseUp = () => {
            isClicked.current = false;
            coords.current.lastX = targetElement.offsetLeft;
            coords.current.lastY = targetElement.offsetTop;
            targetElement.style.cursor = 'grab';
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!isClicked.current) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            targetElement.style.top = `${nextY}px`;
            targetElement.style.left = `${nextX}px`;
        }

        targetElement.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("mouseup", handleMouseUp);
        container.addEventListener("mousemove", handleMouseMove);

        return () => {
            targetElement.removeEventListener("mousedown", handleMouseDown);
            container.removeEventListener("mouseup", handleMouseUp);
            container.removeEventListener("mousemove", handleMouseMove);
        }
    }, [id]);
}

export default useDragger;
