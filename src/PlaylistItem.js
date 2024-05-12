const PlaylistItem = props => {
  const {trackDetails, onDelete} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  return (
    <li className="playlist-item">
      <div className="track-info">
        <img src={imageUrl} alt="track" className="track-image" />
        <div className="track-details">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
          <p className="track-duration">{duration}</p>
        </div>
      </div>
      <button
        className="delete-button"
        alt="delete"
        type="button"
        data-testid="delete"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  )
}

export default PlaylistItem
