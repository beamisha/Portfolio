import React, { useState } from 'react';
import template from './verifyforzoho.html';

function VerifyZoho() {
  const [__html, setHtml] = useState(template);
  
  return(
    <div dangerouslySetInnerHTML={{__html}} />
  );
}

export default VerifyZoho;
