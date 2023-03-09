import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Founder of 2 sounds ", "top news-9999 readers")}
      {newsArticle("eras kush  ", "top news- 67 readers ")}
      {newsArticle("Portugal wins the world cup ", "sport -9999 readers")}
      {newsArticle("Hamilton rises from the dead  ", "Formula 1-9999 readers")}
      {newsArticle(
        "The flash breaks box office  ",
        "movies and tv-9999 readers"
      )}
      {newsArticle(
        "myforex funds changes lives  ",
        "Finance and trading-9999 readers"
      )}
      {newsArticle("elon musk breaks into 300b ", "top news-9999 readers")}
    </div>
  );
}

export default Widgets;
