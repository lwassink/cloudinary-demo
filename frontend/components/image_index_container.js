import { connect } from 'react-redux';
import { addImage } from '../actions';
import ImageIndex from './image_index.jsx';

const mapStateToProps = state => ({
  images: state.images
});

const mapDispatchToProps = dispatch => ({
  addImage: image => dispatch(addImage(image)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageIndex);
