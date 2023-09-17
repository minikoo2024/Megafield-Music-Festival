import React from "react";
import Boramiyu from "../resources/artists/Boramiyu.jpg";

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
        <table>
          <img src={Boramiyu} className="boramiyu" alt="logo" />
        </table>
        <h2>Boramiyu</h2>
        <text>
          Boramiyu is a South Korean singer and YouTuber under Shofar
          Entertainment. She debuted on November 21, 2018 with her first single
          "I Wanna Hate You"
        </text>
      </div>
    </>
  );
}

export default Profile;
