import './scroll_to_top.css';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        let isMounted = true;

        window.addEventListener("scroll", () => {

            if (window.pageYOffset > 50) {
                if (isMounted) setShowButton(true);
            } 
            else {
                if (isMounted) setShowButton(false);
            }

        }, {passive: false});

        return () => {
            isMounted = false;
            setShowButton(false);
        };

    }, []); 

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };  

    return (
        <div>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    &#8679;
                </button>
            )}
        </div>
    );
}