import React from 'react';

const WikiLinkControl = ({ value, onChange, forID, classNameWrapper }) => {
  return (
    <input
      type="text"
      id={forID}
      className={classNameWrapper}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default WikiLinkControl;