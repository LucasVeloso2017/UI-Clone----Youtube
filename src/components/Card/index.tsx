import React from 'react';
import './styles.css'

interface CardProps{
  thumbnail?:string
  img?:string
  title?:string
  channel?:string
  infos?:string
}

const Card: React.FC<CardProps> = ({thumbnail,img,title,channel,infos}:CardProps) => {
  return(
      <>
        <div className="card">
          <div className="video">
            <img src={thumbnail} />
          </div>
          <div className="channel-info">
            <div className="profile">
              <img src={img}/>
            </div>
            <div className="video-infos">
              <span className="title">{title}</span>
              <span className="channel">{channel}</span>
              <span className="infos">{infos}</span>
            </div>
          </div>
        </div>
      </>
  );
}

export default Card;