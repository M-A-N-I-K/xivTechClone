import { useInView } from "framer-motion";
import { useRef } from "react";
export default function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <span
                className="block translate-x-{-100px} opacity-0"
                style={{
                    transform: isInView ? "none" : "translateY(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.69, 1) 0.8s",
                }}
            >
                {children}
            </span>
        </section>
    );
}