import ServerError from 'views/ServerError';
import Minimal from 'layouts/Minimal';

export default () => {
  return (
    <div className="container">
      <Minimal>
        <ServerError />
      </Minimal>
    </div>
  )
}