"use client";

import { useEffect, useState } from "react";


import Two from "./Two";

import { notFound } from "next/navigation";

const metaData = {
  usa: { },
  canada: { },
  france: { }  , 
  australia: { },
  germany: { }, 
  uk: { },
  italy:{ },
  singapore: { },
  malaysia:{ },
  southafrica:{ },
  newzealand:{ },
  philippines:{ },
  poland:{ },
  ireland:{ },
  spain:{ },
  netherlands:{ },
  switzerland: { },
  denmark: { },
  dubai: { },
  luxembourg: { },
  hongkong: { },
  uae: { },
  norway: { },
  sweden: { },
};

export default function CountryClient({ country }) {
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const data = metaData[country?.toLowerCase()];
    if (!data) {
      notFound(); // trigger 404
    } else {
      setMeta(data);
    }
  }, [country]);

  if (!meta) return null;

  return (
    <>
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        
      </div>

     
        {/* Additional Sections */}
      
        <Two />
      
     
    </>
  );
}