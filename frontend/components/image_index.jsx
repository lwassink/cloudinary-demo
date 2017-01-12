import React from 'react';

class ImageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newImage: ""
    };

    this.updateImage = this.updateImage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.cloudinate = this.cloudinate.bind(this);
  }

  updateImage(event) {
    this.setState({newImage: event.target.value});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addImage(this.state.newImage);
  }

  cloudinate(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'dxpvdn7tw',
        upload_preset: 'lqvi4si1',
        theme: 'minimal',
      },
      (errors, imageInfo) => {
        if (errors === null) {
          let image_url = imageInfo[0].url;
          console.log(imageInfo);
        }
      }
    );
  }

  render() {
    return (
      <div>
        <input type="text"
          value={this.state.newImage}
          onChange={this.updateImage} />

        <button onClick={this.handleClick}>
          Add Image
        </button>

        <ul>
          {this.props.images.reverse().map((image, idx) => (<li key={idx}>
            <img src={image} />
          </li>))}
        </ul>
      </div>
    )
  }
}

export default ImageIndex;
