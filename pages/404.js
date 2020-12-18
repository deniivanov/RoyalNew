import NotFoundCover from 'views/NotFoundCover';
import Minimal from 'layouts/Minimal';

export default () => {
  return (
    <div className="container">
      <Minimal>
        <NotFoundCover />
      </Minimal>
    </div>
  )
}