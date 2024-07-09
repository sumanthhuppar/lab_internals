//create a javascript function to download youtube videos by taking youtube url as an input. write code
function downloadYouTubeVideo(url) {
    // Extract the video ID from the YouTube URL
    const videoId = extractVideoId(url);

    // Construct the download URL
    const downloadUrl = `https://www.youtube.com/watch?v=${videoId}`;

    // Perform the download
    download(downloadUrl, "video.mp4");

    // ... (code to download the video)
    

    // Return a success message
    return 'Video downloaded successfully!';
}

function extractVideoId(url) {
    // Extract the video ID from the YouTube URL
    const videoIdRegex = /[?&]v=([^&#]+)/;
    const match = url.match(videoIdRegex);
    if (match && match[1]) {
        return match[1];
    } else {
        throw new Error('Invalid YouTube URL');
    }
}