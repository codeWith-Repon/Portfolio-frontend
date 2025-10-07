import React from 'react';

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log(slug);
  return <div>ProjectDetails</div>;
};

export default ProjectDetails;
