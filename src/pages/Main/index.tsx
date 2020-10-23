import React from 'react';
import './styles.css'


import Navbar from '../../components/Navbar';
import Menu from './../../components/Menu/index';
import Card from './../../components/Card/index';

const Main: React.FC = () => {
  return(
    <>
        <div className="header">
          <Navbar/>
        </div>

      <div className="grid-container">
        <div className="left">
          <Menu/>
        </div>
        <div className="main">
          <Card 
            thumbnail="https://i.ytimg.com/vi/6SfrO3D4dHM/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC7p-iCzLwkK5RRqsw1iGQcGYKGmg"
            img="https://yt3.ggpht.com/a/AATXAJxiC0ILNRKn_1sIcE6LcCsRrEVkDCGhpTdMRDJS=s176-c-k-c0x00ffffff-no-rj-mo"
            title="SOLID fica FÁCIL com Essas Ilustrações"
            channel="Filipe Deschamps"
            infos="1,3 mi de visualizações"
          />

          <Card
            thumbnail="https://i.ytimg.com/vi/U6RxX-cEHnM/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDduNzVfbr5lhNt0UN3SGKGk9b1OA"
            img="https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s176-c-k-c0x00ffffff-no-rj-mo"
            title="Será que meu codigo é adequado? | #PR 22"
            channel="Rocketseat"
            infos="1,0 mi de visualizações"
          />

          <Card
            thumbnail="https://i.ytimg.com/vi/0mYq5LrQN1s/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBQYllUiN7SaopyENAqIJfbYFPHow"
            img="https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s176-c-k-c0x00ffffff-no-rj-mo"
            title="TypeScript o início de forma prática | MasterClass #07"
            channel="Rocketseat"
            infos="1,5 mi de visualizações"
          />
          <Card
            thumbnail="https://i.ytimg.com/vi/VsU6p7DHVtA/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBGwhLp1MyVVPK_fS842O5sZtFmcw"
            img="https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s176-c-k-c0x00ffffff-no-rj-mo"
            title="React Native Web, Expo, React.memo | #PR 04"
            channel="Rocketseat"
            infos="17 mi de visualizações"
          />

          <Card
            thumbnail="https://i.ytimg.com/vi/Vw9BG9fauIE/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDgWNd2aYn9Ety_soC_00XjPhpOyA"
            img="https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s176-c-k-c0x00ffffff-no-rj-mo"
            title="Deno, o que vai acontecer? Code/Drops #31"
            channel="Rocketseat"
            infos="17 mi de visualizações"
          />
          <Card
            thumbnail="https://i.ytimg.com/vi/vwoqx_JqOWI/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAgQlpQRAyrPwrRa7iiPEL_wTWPew"
            img="https://yt3.ggpht.com/a/AATXAJxiC0ILNRKn_1sIcE6LcCsRrEVkDCGhpTdMRDJS=s176-c-k-c0x00ffffff-no-rj-mo"
            title="COMO HACKEAR(ft. @Gabriel Pato)"
            channel="Filipe Deschamps"
            infos="1,3 mi de visualizações"
          />
          <Card
            thumbnail="https://i.ytimg.com/vi/xcDRU_YNo4E/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCncr2LevNiIsxCOom2cQhwysQazA"
            img="https://yt3.ggpht.com/a/AATXAJwuXTc33HxQBeIFsiF5rf3u9uepQiF8CdTvwkHm=s176-c-k-c0x00ffffff-no-rj-mo"
            title="Como hackers quebram as senhas de vazamentos? - Caso Vakinha"
            channel="Gabriel Pato"
            infos="1,3 mi de visualizações"
          />
          <Card
            thumbnail="https://i.ytimg.com/vi/EhnXaybirdA/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDDoFpXuulBvL0wr9Kh0BvjrEBukg"
            img="https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s176-c-k-c0x00ffffff-no-rj-mo"
            title="Criando um projeto do zero para o seu portifólio | MasterClass #14 "
            channel="Rocketseat"
            infos="17 mi de visualizações"
          />

          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>
        
      </div>
    </>
  );
}

export default Main;