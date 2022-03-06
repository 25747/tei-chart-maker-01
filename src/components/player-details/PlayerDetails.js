import React from "react";

const PlayerDetails = ({ data }) => {
  return (
    <span className="flex-span player-detail-span">
      <div className="player-details left">
        <p className="player-details-text">{data.clubName}</p>
        <p className="player-details-text">{data.type.description}</p>
      </div>
      <div className="player-details center">
        <p className="player-details-text">{data.timePeriod}</p>
        <p className="player-details-text">
          {data.minutesPlayed} Minutes Played - FBRef Data
        </p>
      </div>
      <div className="player-details right">
        <p className="player-details-text">{data.playerAge}</p>
        <p className="player-details-text">{data.playerFootedness} Footed</p>
      </div>
    </span>
  );
};

export default PlayerDetails;
