"use client"
// components/TawkToChat.js
import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    (function() {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6731ab974304e3196ae000d2/1icd0cijr';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null;
};

export default TawkToChat;