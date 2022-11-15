import { useGetAdviceQuery } from '../features/api/apiSlice';
import Card from './Card';

const AdviceCard = () => {
    const { data, isLoading, isError, error } = useGetAdviceQuery();

    return (
        <>
            {isLoading ? (
                <div className="loading">
                    <h4>loading</h4>
                </div>
            ) : data ? (
                <Card
                    advice={data.slip.advice}
                    id={data.slip.id}
                    refetchBtn={true}
                />
            ) : isError ? (
                <div
                    className="alert"
                    role="alert"
                >
                    {error}
                </div>
            ) : null}
        </>
    );
};
export default AdviceCard;
