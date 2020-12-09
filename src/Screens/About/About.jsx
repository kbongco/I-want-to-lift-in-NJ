import React from "react";
import './About.css'

export default function About() {
  return (
    <>
      <div className="about">
        <h1>About the app and the owner </h1>
        <p>
          Just a girl trying to find a place to lift, and also trying to have
          something on her programming portfolio. I made this just for fun and I
          also realize this may or may not be a complete list/location finder of
          all the powerlifting/weightlifting friendly gym in NJ. If you have a
          location that I may have missed, please contact me and I'll add it
          accordingly.
        </p>

        <p>What determines what gets into the finder?</p>
        <p>Yeah, I am aware of commercial gyms and stuff. However, this finder is specifically for trying to find 
         a powerlifting/weightlifting friendly gym. That being said, if a gym is specialized for these two sports 
          or its a "commercial" gym with a specific section dedicated to powerlifting or weightlifting it makes it 
          onto this list. 
         
        </p>
        <p>My gym isn't listed, how do I get in contact with you?</p>
        There's a contact form linked above. Fill it out and I'll get back to you 
        as soon as I can. 
        Also, for the programming background, I used the Yelp API to help me with this 
        for some reason some places that I know that are weightlifting/powerlifting friendly 
        isn't listed in the Yelp API so that may also be the reason why that gym isn't listed. 
        <br />
        <p>
          Also, this is technically a "mobile" app, so please view on your
          various mobile devices for the best/optimized quality. 
        </p>
      </div>
    </>
  );
}
