import React from 'react';

interface SayMyNameProps {
  name: string
}

const SayMyName: React.FC<SayMyNameProps> = (props) => {
  return (
    <div>
      <p>Fala ai {props.name}, suave?</p>
    </div>
  )
}

export default SayMyName