import React from "react";
import Iframe from "react-iframe";

function ArtistInfo() {
  return (
    <div style={{ align: "center" }}>
      {/* Artist Image /// Artist Name / Artist Music Album, Artist History */}

      <textarea>please write the explanation of artist</textarea>
    </div>
  );
}

function Profile() {
  // Add Artist Information on this Page
  // Artist Photo, Name,
  // Artist History
  // Artist's Music, Album, Youtube Links?

  // If you want to show the music video on this page, you can use <Iframe></Iframe> tag
  // This tag allows you to show the contents outside such as youtube, google, naver.com things on your website.

  // please follow the code below to show the youtube
  //https://codesandbox.io/s/react-iframe-7yncj

  return (
    <>
      <div>
        <h2>Artist TimeTable</h2>
        <div></div>
        <Iframe
          url="https://www.youtube.com/watch?v=DEy_LR1nslI"
          width="640px"
          height="320px"
          id=""
          className=""
          display="block"
          position="relative"
        />
      </div>
    </>
  );
}

export default Profile;
