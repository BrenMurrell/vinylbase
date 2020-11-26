exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([{
        id: 1,
        name: 'Dark Side of the Moon',
        artist: 1,
        condition: 'Average',
        notes: 'Vinyl in okay condition, sleeve fairly tatty.',
        image: 'https://vinylbase.s3.amazonaws.com/images/darkside.jpg',
        spotifyId: '4LH4d3cOWNNsVw41Gqt2kv'
      }, {
        id: 2,
        name: 'War of the Worlds',
        artist: 3,
        condition: 'Excellent',
        notes: 'Includes full colour booklet with lyrics and original artwork.',
        image: 'https://vinylbase.s3.amazonaws.com/images/war-of-the-worlds.jpg',
        spotifyId: '7ligZljXfUtcKPCotWul5g'
      }, {
        id: 3,
        name: 'Making Movies',
        artist: 4,
        condition: 'Great',
        notes: 'Bought from Greytown. Really good condition.',
        image: 'https://vinylbase.s3.amazonaws.com/images/making-movies.jpg',
        spotifyId: '3wvclpO3LJmpSQGQ9gBa2a'
      }, {
        id: 4,
        name: 'Dire Straits',
        artist: 4,
        condition: 'Good',
        notes: 'Vinyl is in good condition, sleeve is pretty rough',
        image: 'https://vinylbase.s3.amazonaws.com/images/dire-straits.jpg',
        spotifyId: '2rCS6Xwx32V27pvgFzLzlT'
      }, {
        id: 5,
        name: 'Love Over Gold',
        artist: 4,
        condition: 'Good',
        notes: 'Vinyl is in good condition, sleeve is pretty rough',
        image: 'https://vinylbase.s3.amazonaws.com/images/love-over-gold.jpg',
        spotifyId: '4hJqOIahWodpSJU6uDgjvN'
      }, {
        id: 6,
        name: 'Sgt. Peppers Lonely Hearts Club Band',
        artist: 2,
        condition: 'Good',
        notes: 'n/a',
        spotifyId: '6QaVfG1pHYl1z15ZxkvVDW',
        image: 'https://vinylbase.s3.amazonaws.com/images/1603834552782sgtpeppers.jpeg'
      }, {
        id: 7,
        name: 'Revolver',
        artist: '2',
        condition: 'Good',
        notes: 'Cover is a bit rough otherwise okay',
        spotifyId: '3PRoXYsngSwjEQWR5PsHWR',
        image: 'https://vinylbase.s3.amazonaws.com/images/1603834581104revolver.jpeg'
      }, {
        id: 8,
        name: 'III',
        artist: '7',
        condition: 'New',
        notes: 'Bought new from the Warehouse. 180gm vinyl, recreation of original artwork with spinning disc',
        spotifyId: '6P5QHz4XtxOmS5EuiGIPut',
        image: 'https://vinylbase.s3.amazonaws.com/images/1603614106703led-zepp-iii.jpg'
      }, {
        id: 9,
        name: 'Heartbeat City',
        artist: '6',
        condition: 'Good',
        notes: '',
        spotifyId: '5ycnwHGkzOlTuMOI3Zh4iO',
        image: 'https://vinylbase.s3.amazonaws.com/images/1603614663677heartbeat-city.jpg'
      }, {
        id: 10,
        name: 'Tracy Chapman',
        artist: '8',
        condition: 'Good',
        notes: '',
        spotifyId: '6hmmX5UP4rIvOpGSaPerV8',
        image: 'https://vinylbase.s3.amazonaws.com/images/1603657379736tracy-chapman.jpg'
      }])
    })
}
