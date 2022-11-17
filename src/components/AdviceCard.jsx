import { useGetAdviceQuery } from '../features/api/apiSlice';
import Card from './Card';
import {
    changeData,
    selectedData,
} from '../features/updateData/updateDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const AdviceCard = () => {
    const { data, isLoading, isError, error } = useGetAdviceQuery();
    const dispatch = useDispatch();

    const [flag, setFlag] = useState(false);
    console.log(data, flag);

    const currentData = useSelector(selectedData);

    useEffect(() => {
        const tid = setTimeout(
            data
                ? () => {
                      dispatch(changeData(data.slip));
                      setFlag(true);
                  }
                : console.log('No data available'),
            10
        );
        if (flag) {
            clearTimeout(tid);
            return;
        }
    }, [data, flag]);
    return (
        <>
            {isLoading ? (
                <div className="loading">
                    <h4>loading</h4>
                </div>
            ) : currentData ? (
                <Card
                    advice={currentData.payload.advice}
                    id={currentData.payload.id}
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
