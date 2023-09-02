import React from "react";
import Iframe from 'react-iframe'

function Profile() {
  // Add Artist Information on this Page
  // Artist Photo, Name,
  // Artist History
  // Artist's Music, Album, Youtube Links?

  // If you want to show the music video on this page, you can use <Iframe></Iframe> tag
  // This tag allows you to show the contents outside such as youtube, google, naver.com things on your website.

  return (
    <>
      <div>
        <h2>Artist TimeTable</h2>
        <Iframe url="https://www.youtube.com/watch?v=DEy_LR1nslI"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
      </div>
    </>
  );
}

export default Profile;
