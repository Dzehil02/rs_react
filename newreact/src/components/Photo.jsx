
const Photo = (props) => {
    return (
      <div className="card">
          <h3>{props.photo.title}</h3>
          <h4>ID: {props.photo.id}</h4>
          <img src={props.photo.thumbnailUrl} alt={props.photo.id} />
      </div>
    );
  };
  
  export default Photo;