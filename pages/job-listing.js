import JobListing from 'views/JobListing';
import Main from 'layouts/Main';

export default () => {
  return (
    <div className="container">
      <Main>
        <JobListing />
      </Main>
    </div>
  )
}
