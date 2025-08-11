import React, { useState, useEffect } from "react";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import IconBox from "../../Components/IconBox/IconBox";
import MapLocationIcon from "../../assets/icons/MapLocationIcon";
import MapCalendarButton from "../../Components/MapCalenerButton/MapCalenderButton";
import FindInput from "../../Components/FindInput/FindInput";
import { searchAvailablePhotographers } from "../../api/photographersAPi";
import "./MapContent.css";
import Button from "../../Components/Button/Button";
import PGLContent from "../PGScreen/PGLContent";

export default function MapContent() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [photographers, setPhotographers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);

  const latitude = 31.5204;
  const longitude = 74.3587;

  const formatDate = (date) =>
    date ? new Date(date).toISOString().split("T")[0] : null;

  const isValidDate = (d) => d instanceof Date && !isNaN(d.getTime());

  useEffect(() => {
    const fetchPhotographers = async () => {
      if (isValidDate(fromDate) && isValidDate(toDate)) {
        setLoading(true);
        setShowList(false);
        try {
          const start = formatDate(fromDate);
          const end = formatDate(toDate);
          const response = await searchAvailablePhotographers({
            start_date: start,
            end_date: end,
            latitude,
            longitude,
          });

          console.log("API Response:", response);

          setPhotographers(response?.data || []);
        } catch (err) {
          console.error("Error fetching photographers:", err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPhotographers();
  }, [fromDate, toDate]);

  return (
    <div className="map-content">
      <div className="map-inner">
        {!showList ? (
          <>
            {/* Search and calendar */}
            <div className="map-header-row">
              <FindInput
                icon={LeftArrowIcon}
                placeholder="Find for photographers"
              />
              <IconBox icon={MapLocationIcon} />
            </div>

            <div className="calendar-button-group">
              <MapCalendarButton
                label="From"
                onDateSelect={(date) => setFromDate(new Date(date))}
              />
              <MapCalendarButton
                label="To"
                onDateSelect={(date) => setToDate(new Date(date))}
              />
            </div>

            {/* Loading state */}
           {/* Loading state */}
                  {loading && (
              <div style={{ width: "100%", textAlign: "left" }}>
              <LoadingDots />
                   </div>
                )}


            {/* No photographers */}
            {!loading && fromDate && toDate && photographers.length === 0 && (
              <p>No photographers found for selected dates.</p>
            )}

            {/* Show List Button */}
            {!loading && photographers.length > 0 && (
              <Button
                onClick={() => setShowList(true)}
                className="show-list-btn"
                varient="outlined"
              >
                See Photographer List
              </Button>
            )}
          </>
        ) : (
          <PGLContent
            photographers={photographers}
            startDate={formatDate(fromDate)}
            endDate={formatDate(toDate)}
            latitude={latitude}
            longitude={longitude}
          />
        )}
      </div>
    </div>
  );
}

function LoadingDots() {
  return (
    <p className="map-loading-text">
      Loading photographers
      <span className="map-loading-dots">
        <span className="map-dot" />
        <span className="map-dot" />
        <span className="map-dot" />
      </span>
    </p>
  );
}
