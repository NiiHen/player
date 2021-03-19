if(vp1 == null){

if ('mediaSession' in navigator) {

  navigator.mediaSession.metadata = new MediaMetadata({
    title: defaultjudul,
    artist: 'INAFUT.COM ~ Indonesian Foods',
    album: 'Streaming '+defaultjudul,
    artwork: [
      { src: 'https://1.bp.blogspot.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s96-k/Foods.gif',  sizes: '96x96',   type: 'image/gif' },
      { src: 'https://1.bp.blogspot.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s128-k/Foods.gif', sizes: '128x128', type: 'image/gif' },
      { src: 'https://1.bp.blogspot.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s192-k/Foods.gif', sizes: '192x192', type: 'image/gif' },
      { src: 'https://1.bp.blogspot.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s256-k/Foods.gif', sizes: '256x256', type: 'image/gif' },
      { src: 'https://1.bp.blogspot.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s384-k/Foods.gif', sizes: '384x384', type: 'image/gif' },
      { src: 'https://1.bp.blogspot.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s512-k/Foods.gif', sizes: '512x512', type: 'image/gif' },
    ]
  });
 
 try {
 
  navigator.mediaSession.setActionHandler("play", async () => {  await document.querySelector("video").play();  navigator.mediaSession.playbackState = "playing";}),
  navigator.mediaSession.setActionHandler("pause", () => {  document.querySelector("video").pause();  navigator.mediaSession.playbackState = "paused";}),
  navigator.mediaSession.setActionHandler("seekbackward", null),  
  navigator.mediaSession.setActionHandler("seekforward", null),  
  navigator.mediaSession.setActionHandler("previoustrack", null),  
  navigator.mediaSession.setActionHandler("nexttrack", null);
  } 
		catch (error) {  
			console.log(`The media session action "seekbackward" is not supported yet.`), 
			console.log(`The media session action "seekforward" is not supported yet.`), 
			console.log(`The media session action "previoustrack" is not supported yet.`), 
			console.log(`The media session action "nexttrack" is not supported yet.`);	
		}
}
  
} else {  
  
if ('mediaSession' in navigator) {

  navigator.mediaSession.metadata = new MediaMetadata({
    title: encryptjd1,
    artist: 'Moecan',
    album: 'Streaming Anime Hentai Subtitle Indonesia',
    artwork: [
      { src: 'https://1.bp.blogspot.com/-DfhurijdXfk/XoLRyMVoc7I/AAAAAAAAAPY/ujs_4cpWv4Yc9KO2gUZUHFNAafAboEemwCLcBGAsYHQ/s96/icon.png',  sizes: '96x96',   type: 'image/png' },
      { src: 'https://1.bp.blogspot.com/-DfhurijdXfk/XoLRyMVoc7I/AAAAAAAAAPY/ujs_4cpWv4Yc9KO2gUZUHFNAafAboEemwCLcBGAsYHQ/s128/icon.png', sizes: '128x128', type: 'image/png' },
      { src: 'https://1.bp.blogspot.com/-DfhurijdXfk/XoLRyMVoc7I/AAAAAAAAAPY/ujs_4cpWv4Yc9KO2gUZUHFNAafAboEemwCLcBGAsYHQ/s192/icon.png', sizes: '192x192', type: 'image/png' },
      { src: 'https://1.bp.blogspot.com/-DfhurijdXfk/XoLRyMVoc7I/AAAAAAAAAPY/ujs_4cpWv4Yc9KO2gUZUHFNAafAboEemwCLcBGAsYHQ/s256/icon.png', sizes: '256x256', type: 'image/png' },
      { src: 'https://1.bp.blogspot.com/-DfhurijdXfk/XoLRyMVoc7I/AAAAAAAAAPY/ujs_4cpWv4Yc9KO2gUZUHFNAafAboEemwCLcBGAsYHQ/s384/icon.png', sizes: '384x384', type: 'image/png' },
      { src: 'https://1.bp.blogspot.com/-DfhurijdXfk/XoLRyMVoc7I/AAAAAAAAAPY/ujs_4cpWv4Yc9KO2gUZUHFNAafAboEemwCLcBGAsYHQ/s512/icon.png', sizes: '512x512', type: 'image/png' },
    ]
  });
 
 try {
 
  navigator.mediaSession.setActionHandler("play", async () => {  await document.querySelector("video").play();  navigator.mediaSession.playbackState = "playing";}),
  navigator.mediaSession.setActionHandler("pause", () => {  document.querySelector("video").pause();  navigator.mediaSession.playbackState = "paused";}),
  navigator.mediaSession.setActionHandler("seekbackward", null),  
  navigator.mediaSession.setActionHandler("seekforward", null),  
  navigator.mediaSession.setActionHandler("previoustrack", null),  
  navigator.mediaSession.setActionHandler("nexttrack", null);
  } 
		catch (error) {  
			console.log(`The media session action "seekbackward" is not supported yet.`), 
			console.log(`The media session action "seekforward" is not supported yet.`), 
			console.log(`The media session action "previoustrack" is not supported yet.`), 
			console.log(`The media session action "nexttrack" is not supported yet.`);	
		}
}
}  
