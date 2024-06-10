import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from './../../../components/contentWrapper/contentWrapper';
// import ContentWrapper from './../../../components/contentWrapper/ContentWrapper';

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <div className="videosSection">
            <ContentWrapper>
          <div className="sectionHeading">Similar</div>
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
        </ContentWrapper>
        </div>

    );
};

export default Similar;