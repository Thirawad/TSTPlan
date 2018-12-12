import React from 'react';

const ProjectDetails = (props) => {
  console.log(props)
  const id = props.match.params.id
  return (
    <div className="container section projtect-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title-{id}</span>
          <p>This is my first card's post detail</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by the TST</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
