import React from 'react';

const RepoDetails = (props) => {
  const { data } = props;

  // If User Does not exist
  if (data.message === "Not Found") {
    return <div className='username__notfound'>User Name Not Found!</div>;
  }

  // If User Has 0 Repository
  if (data.length === 0) {
    return (
      <div className='zero_repo'>
        User has 0 Repository.
      </div>
    );
  }

  return (
    <div className='details'>
      <div className='details__user'>
        <div>
          <span>User Name</span>&nbsp;&nbsp;
          {data[0].owner.login}
        </div>
        <div>
          <span>Total Repositories</span> &nbsp;&nbsp;
          {data.length}
        </div>
      </div>
      <div className='details__repos'>
        {data.map((repo, key) => (
          <div key={key} className='details__repo'>
            <div>
              <span>Repo Name</span> &nbsp;&nbsp;
              {repo.name}
            </div>
            <div>
              <span>Fork Count</span>&nbsp;&nbsp;
              {repo.forks_count}
            </div>
            <div>
              <span>Repo Watchers</span>&nbsp;&nbsp;
              {repo.watchers}
            </div>
            <div className='details__repo__description'>
              <span>Repo description</span>&nbsp;&nbsp;
              {repo.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoDetails;