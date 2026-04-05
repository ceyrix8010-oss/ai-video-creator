const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    process.env.YOUTUBE_CLIENT_ID,
    process.env.YOUTUBE_CLIENT_SECRET,
    process.env.YOUTUBE_REDIRECT_URI
);

// Function to generate the authentication URL
function getAuthUrl() {
    const scopes = ['https://www.googleapis.com/auth/youtube.upload'];
    return oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
    });
}

// Function to set credentials after user has authenticated
function setCredentials(code) {
    return oauth2Client.getToken(code).then((response) => {
        oauth2Client.setCredentials(response.tokens);
        return response.tokens;
    });
}

// Function to upload a video to YouTube
async function uploadVideo(videoFilePath, title, description) {
    const youtube = google.youtube({ version: 'v3', auth: oauth2Client });
    const videoRequest = await youtube.videos.insert({
        part: 'snippet,status',
        requestBody: {
            snippet: {
                title: title,
                description: description,
            },
            status: {
                privacyStatus: 'public',
            },
        },
        media: {
            body: fs.createReadStream(videoFilePath),
        },
    });
    return videoRequest.data;
}

module.exports = {
    getAuthUrl,
    setCredentials,
    uploadVideo,
};