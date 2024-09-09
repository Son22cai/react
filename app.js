function Thumbnail({ video }) {
    return (
        <div className="thumbnail">
            <img src={video.thumbnail} alt={video.title} />
        </div>
    );
}

function LikeButton({ video }) {
    return (
        <button className="like-button">
            ❤️ Like
        </button>
    );
}

function Video({ video }) {
    return (
        <div className="video-container">
            <Thumbnail video={video} />
            <a href={video.url} className="video-title">
                <h3>{video.title}</h3>
            </a>
            <p>{video.description}</p>
            <LikeButton video={video} />
        </div>
    );
}

const videoData = {
    url: '#',
    title: 'My video',
    description: 'Video description',
    thumbnail: 'https://via.placeholder.com/300x150'
};

ReactDOM.render(<Video video={videoData} />, document.getElementById('root'));




