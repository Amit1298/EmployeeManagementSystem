import React from 'react';

function Details({data}) {
  return (
    <div>Selected Sidebar option is -- {data?.description}</div>
  )
}

export default Details;