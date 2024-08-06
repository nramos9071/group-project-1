window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQBZhyj3bGMArBoL9rEc1PGv34-_K_rfueE24FzBGv6SNATSYCql7FectNxYnuo8TDtH485BI2XABUXLISFT7TOa6u8tBVEauH47_8kjbbF83c6-_WA4YbQxyOOuY7w24pGS85hqMDAZPf6d0MnjiHNauIj5xy_Z7qWpnWV1yJPAufIIMzfwSjDttYO_xjQTZZ5a7vch63LVp-IuBRmDuAnKp-JEK-U_Wg';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5

     
    });

     // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  player.addListener('initialization_error', ({ message }) => {
    console.error(message);
});

player.addListener('authentication_error', ({ message }) => {
    console.error(message);
});

player.addListener('account_error', ({ message }) => {
    console.error(message);

document.getElementById('togglePlay').onclick = function() {
    player.togglePlay();
    };
});

player.connect();

}