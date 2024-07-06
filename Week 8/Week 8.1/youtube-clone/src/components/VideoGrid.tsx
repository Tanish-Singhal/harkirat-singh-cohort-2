import VideoCard from "./VideoCard"

const VIDEOS = [{
  videoTitle: "Money Man | Official Trailer 2",
  videoThumbnail: "thumbnail.jpg",
  channelIcon: "icon.jpg",
  channelUsername: "T Series",
  videoViews: "100K views",
  datePosted: "2 days ago"
}, {
  videoTitle: "Tiger Man | Official Trailer 2",
  videoThumbnail: "thumbnail.jpg",
  channelIcon: "icon.jpg",
  channelUsername: "T Series",
  videoViews: "100K views",
  datePosted: "2 days ago"
}, {
  videoTitle: "Lion Man | Official Trailer 2",
  videoThumbnail: "thumbnail.jpg",
  channelIcon: "icon.jpg",
  channelUsername: "T Series",
  videoViews: "100K views",
  datePosted: "2 days ago"
}, {
  videoTitle: "Money Man | Official Trailer 2",
  videoThumbnail: "thumbnail.jpg",
  channelIcon: "icon.jpg",
  channelUsername: "T Series",
  videoViews: "100K views",
  datePosted: "2 days ago"
}, {
  videoTitle: "Tiger Man | Official Trailer 2",
  videoThumbnail: "thumbnail.jpg",
  channelIcon: "icon.jpg",
  channelUsername: "T Series",
  videoViews: "100K views",
  datePosted: "2 days ago"
}, {
  videoTitle: "Lion Man | Official Trailer 2",
  videoThumbnail: "thumbnail.jpg",
  channelIcon: "icon.jpg",
  channelUsername: "T Series",
  videoViews: "100K views",
  datePosted: "2 days ago"
}, {
  videoTitle: "Money Man | Official Trailer 2",
  videoThumbnail: "thumbnail.jpg",
  channelIcon: "icon.jpg",
  channelUsername: "T Series",
  videoViews: "100K views",
  datePosted: "2 days ago"
}, {
  videoTitle: "Tiger Man | Official Trailer 2",
  videoThumbnail: "thumbnail.jpg",
  channelIcon: "icon.jpg",
  channelUsername: "T Series",
  videoViews: "100K views",
  datePosted: "2 days ago"
}, {
  videoTitle: "Lion Man | Official Trailer 2",
  videoThumbnail: "thumbnail.jpg",
  channelIcon: "icon.jpg",
  channelUsername: "T Series",
  videoViews: "100K views",
  datePosted: "2 days ago"
}]

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {VIDEOS.map(video => <div>
        <VideoCard
          videoTitle={video.videoTitle}
          videoThumbnail={video.videoThumbnail}
          channelIcon={video.channelIcon}
          channelUsername={video.channelUsername}
          videoViews={video.videoViews}
          datePosted={video.datePosted}
        />
      </div>)}
    </div>
  )
}

export default VideoGrid; 