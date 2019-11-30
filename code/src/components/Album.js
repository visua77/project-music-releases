import React from 'react'
import './album.css'
import logo from 'icons/play.svg'
import logo2 from 'icons/heart.svg'
import logo3 from 'icons/dots.svg'

export const Album = (props) => (
  <div className="album">
    <div className="theText">
    <h1><a href={props.item.external_urls.spotify}>{props.name}</a></h1>
    <h3><a href={props.item.artists[0].external_urls.spotify}>{props.item.artists[0].name}</a></h3></div>
    <div><img src={props.item.images[0].url} alt="" />
    </div>
    <div className="info">
    <div className="hoverInfo"><a href={props.item.external_urls.spotify}><img src={logo} alt="" /></a></div>
    <div className="hoverInfo2"><img src={logo2} alt="" /></div>
    <div className="hoverInfo3"><img src={logo3} alt="" /></div>
    </div>
  </div>
)
