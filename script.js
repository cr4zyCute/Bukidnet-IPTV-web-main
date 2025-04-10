    // HLS/YouTube Player
    var video = document.getElementById("videoPlayer");
    var iframe = document.getElementById("videoFrame");
    var hls = null;

    // Initialize Shaka Player
    const shakaVideo = document.getElementById('shakaPlayer');
    const shakaPlayer = new shaka.Player(shakaVideo);

    // Load channels into the sidebar
    function loadChannels() {
        const channelsContainer = document.getElementById('combinedChannels');
        channelsContainer.innerHTML = '';
        
        combinedChannels.forEach((channel, index) => {
            const button = document.createElement('div');
            button.className = 'channel';
            button.textContent = channel.name;
            button.addEventListener('click', () => playChannel(channel));
            channelsContainer.appendChild(button);
        });
    }

    // Play a channel
    function playChannel(channel) {
        stopAllPlayers();
        
        if (channel.type === 'youtube') {
            iframe.style.display = "block";
            video.style.display = "none";
            document.getElementById("shakaContainer").style.display = "none";
            iframe.src = channel.url.replace("autoplay=1", "autoplay=0");
        } 
        else if (channel.type === 'hls') {
            iframe.style.display = "none";
            video.style.display = "block";
            document.getElementById("shakaContainer").style.display = "none";

            if (Hls.isSupported()) {
                if (hls) {
                    hls.destroy();
                }
                hls = new Hls();
                hls.loadSource(channel.url);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, function() {
                    video.play();
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = channel.url;
                video.play();
            }
        }
        else if (channel.type === 'dash') {
            iframe.style.display = "none";
            video.style.display = "none";
            document.getElementById("shakaContainer").style.display = "flex";
            
            try {
                if (channel.clearKey) {
                    shakaPlayer.configure({
                        drm: {
                            clearKeys: channel.clearKey
                        }
                    });
                }

                shakaPlayer.configure({
                    streaming: {
                        bufferingGoal: 60,
                        rebufferingGoal: 2,
                        bufferBehind: 30,
                        ignoreTextStreamFailures: true
                    },
                    abr: {
                        enabled: true,
                        defaultBandwidthEstimate: 500000
                    }
                });

                shakaPlayer.load(channel.url).then(() => {
                    shakaVideo.play();
                });
                
                shakaVideo.style.display = 'block';
                shakaVideo.style.backgroundColor = '#000';
                
            } catch (error) {
                console.error('Error loading DASH stream:', error);
                alert('Error loading video: ' + error.message);
            }
        }
    }

    // Stop all players
    function stopAllPlayers() {
        // Stop HLS player
        if (hls) {
            hls.destroy();
            hls = null;
        }
        
        // Stop HTML5 video
        if (video) {
            video.pause();
            video.removeAttribute('src');
            video.load();
        }
        
        // Stop YouTube iframe
        if (iframe) {
            iframe.src = '';
        }
        
        // Stop Shaka Player
        if (shakaPlayer) {
            shakaPlayer.unload();
        }
    }

    // Initialize the app
    document.addEventListener('DOMContentLoaded', async () => {
        // Initialize Shaka Player
        await shaka.polyfill.installAll();
        
        if (!shaka.Player.isBrowserSupported()) {
            console.error('Browser not supported for Shaka Player');
            alert('Your browser does not support the required video playback features');
        } else {
            console.log('Shaka Player is supported');
            loadChannels();
        }
    });

    // document.getElementById("sidebarToggle").addEventListener("click", function() {
    //     document.getElementById("sidebar").classList.toggle("active");
    // });
    // Add this after your channel loading code
document.addEventListener('DOMContentLoaded', function() {
    const channelSearch = document.getElementById('channelSearch');
    const searchButton = document.getElementById('searchButton');
    const clearSearch = document.getElementById('clearSearch');
    const combinedChannels = document.getElementById('combinedChannels');
    let allChannels = []; // This will store all channels for filtering
    
    // Assuming you have a function that loads channels, modify it to store channels in allChannels
    // For example:
    function loadChannels() {
        // Your existing channel loading code...
        // After loading, store references to all channels
        allChannels = Array.from(combinedChannels.querySelectorAll('.channel-item'));
    }
    
    // Search functionality
    function filterChannels() {
        const searchTerm = channelSearch.value.toLowerCase();
        
        allChannels.forEach(channel => {
            const channelName = channel.textContent.toLowerCase();
            if (channelName.includes(searchTerm)) {
                channel.style.display = 'block';
            } else {
                channel.style.display = 'none';
            }
        });
    }
    
    // Event listeners
    searchButton.addEventListener('click', filterChannels);
    
    clearSearch.addEventListener('click', function() {
        channelSearch.value = '';
        allChannels.forEach(channel => {
            channel.style.display = 'block';
        });
    });
    
    // Search as you type
    channelSearch.addEventListener('input', filterChannels);
    
    // Initialize by loading channels
    loadChannels();
});

