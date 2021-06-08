import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  const renderTours = () => {
    return tours.map((tour) => {
      return <Tour {...tour} key={tour.id} removeTour={removeTour} />;
    });
  };

  return (
    <>
      <section>
        <div className="title">
          {/* need to set up conditional render for 'our tours' or if none, 'no tours left' and refresh button */}
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>{renderTours()}</div>
      </section>
    </>
  );
};

export default Tours;
