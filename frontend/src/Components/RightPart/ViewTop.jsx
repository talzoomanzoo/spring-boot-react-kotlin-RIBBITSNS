import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findByTopViews } from "../../Store/Tweet/Action";
import TwitCard from "../Home/MiddlePart/TwitCard/TwitCard";

const ViewTop = () => {
    const dispatch = useDispatch();
    const { twit } = useSelector(store => store);

    useEffect(() => {
        dispatch(findByTopViews());
        //console.log("useEffect test1");
    }, [])

    

    return (
        <div>
            {twit?.topViewsTwits && twit.topViewsTwits?.length > 0 ?
                (
                    twit.topViewsTwits?.map((item) => <TwitCard twit={item} key={item.id} />)
                ) :
                (
                    <div>게시된 리빗이 없습니다.</div>
                )}
        </div>
    )
};

export default ViewTop;