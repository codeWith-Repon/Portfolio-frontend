import React from 'react';

const blogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  console.log((await params).slug);
  return <div>blogDetails</div>;
};

export default blogDetails;
