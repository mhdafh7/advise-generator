import { ReactComponent as IconDice } from '../assets/images/icon-dice.svg';
import { ReactComponent as PatternDividerLg } from '../assets/images/pattern-divider-desktop.svg';
import { ReactComponent as PatternDividerMd } from '../assets/images/pattern-divider-mobile.svg';
import { useState, useEffect } from 'react';
import { useGetAdviceQuery } from '../features/api/apiSlice';

const Card = ({ advice, id, refetchBtn }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const { refetch } = useGetAdviceQuery();

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 768;

    return (
        <div className="card">
            <h5>Advice #{id}</h5>
            <p>{advice}</p>
            {isMobile ? (
                <PatternDividerMd className="divider-md" />
            ) : (
                <PatternDividerLg className="divider-lg" />
            )}
            {refetchBtn ? (
                <div
                    className="dice"
                    onClick={() => refetch()}
                >
                    <IconDice />
                </div>
            ) : null}
        </div>
    );
};
export default Card;
