import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
// import "./style_recoomend.scss"
// import ContentWrapper from '../../..components/ContentWrapper';
import ContentWrapper from './../../../components/contentWrapper/contentWrapper';
const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <div className="videosSection">
            <ContentWrapper>
          <div className="sectionHeading">Recomandation</div>
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
        </ContentWrapper>
        </div>
    );
};

export default Recommendation;