import NotFound from 'views/NotFound';
import Minimal from 'layouts/Minimal';

export default () => {
  return (
    <div className="container">
      <Minimal>
        <NotFound />
      </Minimal>
    </div>
  )
}
