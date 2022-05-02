const musicPlayer = {
  songs: [
    {
      title: "Should I stay or Should I go",
      artist: "The Clash",
    },
    {
      title: "Toxic",
      artist: "Britney Spears",
    },
    {
      title: "Faster",
      artist: "Janelle Monáe",
    },
    {
      title: "Surgeon",
      artist: "St. Vincent",
    },
    {
      title: "I Fought the Law",
      artist: "The Clash",
    },
    {
      title: "Pedestrian at Best",
      artist: "Courtney Barnett",
    },
    {
      title: "Vordhosbn",
      artist: "Aphex Twin",
    },
  ],
  playlist: [],
  findSongByTitle: function (title) {
    const lowerCaseTitle = title.toLowerCase();
    for (let i = 0; i < this.songs.length; i++) {
        if (this.songs[i].title.toLowerCase() === lowerCaseTitle) {
            return i;
        }
    }
    return -1;
  },
  searchSongByTitle: function () {},
  getSongByIndex: function () {},
  addSongToPlaylist: function () {},
  toggleFavouriteSong: function () {},
  getFavouriteSongs: function () {},
  printPlaylist: function () {},
};

console.log("index of song with title toxic", musicPlayer.findSongByTitle("toxic"));