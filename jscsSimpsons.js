/*** Using Higher Order Functions to Reduce Large Amounts of Data ***/

// 1. Print simpsonsData to the console.
console.log(simpsonsData);

// 2. Assign the data for one episode to a variable oneEpisode
let oneEpisode = simpsonsData[0];
console.log(oneEpisode);

// 3. Create an array of episode titles called episodeTitles
const episodeTitles = [];
for (let i = 0; i < simpsonsData.length; i++){
  episodeTitles.push(simpsonsData[i].title) 
};
console.log(episodeTitles);

// 4. Create an array of episodes with video urls called episodesWithUrls
const episodesWithUrls = [];
  for (let i = 0; i < simpsonsData.length; i++){
    episodesWithUrls.push(simpsonsData[i].video_url)
  }
console.log(episodesWithUrls);


// 5. Count all the letters of all the Simpsons episode titles and assign that number to a variable called letters
const episodeTitles = [];
for (let i = 0; i < simpsonsData.length; i++){
  episodeTitles.push(simpsonsData[i].title) 
};
console.log(episodeTitles);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let furtherReduced =episodeTitles.reduce(reducer)

let MfurtherReduced = furtherReduced.replace(/\s|\W/g, "")
MfurtherReduced = MfurtherReduced.split("");
let totalChar =  MfurtherReduced.length;
console.log(totalChar);

// 6. Find the total US viewers for all episodes of season 4 and store that number in a variable called totalViewers

var data = [
  {
    "id": 542,
    "title": "Diggs",
    "original_air_date": "2014-03-09",
    "production_code": "SABF08",
    "season": 25,
    "number_in_season": 12,
    "number_in_series": 542,
    "us_viewers_in_millions": 2.69,
    "views": 39292,
    "imdb_rating": 6.4,
    "imdb_votes": 473,
    "image_url": "http://static-media.fxx.com/img/FX_Networks_-_FXX/208/635/Diggs.jpg",
    "video_url": "http://www.simpsonsworld.com/video/310529091639"
  },
  {
    "id": 548,
    "title": "Days of Future Future",
    "original_air_date": "2014-04-13",
    "production_code": "SABF13",
    "season": 25,
    "number_in_season": 18,
    "number_in_series": 548,
    "us_viewers_in_millions": 3.64,
    "views": 55742,
    "imdb_rating": 7,
    "imdb_votes": 504,
    "image_url": "http://static-media.fxx.com/img/FX_Networks_-_FXX/973/851/days_of_future_future.jpg",
    "video_url": "http://www.simpsonsworld.com/video/310257731892"
  },
   {
    "id": 511,
    "title": "Adventures in Baby-Getting",
    "original_air_date": "2012-11-04",
    "production_code": "PABF18",
    "season": 24,
    "number_in_season": 3,
    "number_in_series": 511,
    "us_viewers_in_millions":"",
    "views": 39687,
    "imdb_rating": 6.9,
    "imdb_votes": 460,
    "image_url": "http://static-media.fxx.com/img/FX_Networks_-_FXX/476/11/Adventures_in_Baby_Getting.jpg",
    "video_url": "http://www.simpsonsworld.com/video/221688899646"
  }
];

const total = [];
for (let i = 0; i < simpsonsData.length; i++){
  total.push(simpsonsData[i].us_viewers_in_millions)
};
//console.log(total)
let totalFiltered = total.filter(function(el){
  if (typeof el === 'number'){return true;}
});
//console.log(totalFiltered)
let totalViewers = totalFiltered.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0)
console.log(Math.floor(totalViewers))
////////////////////

var totalViewerss = 0;

for (let i = 0; i < simpsonsData.length; i++){
	if (simpsonsData[i].season < 30) {
  totalViewerss = totalViewerss + (simpsonsData[i].us_viewers_in_millions*1);
}
}
console.log(Math.floor(totalViewerss) + " million");


// 7. Find the average number of imdb votes per episode in season 15 and store that number in a variable called imdbAverage

//filter if season 15, then add number of imdb votes to imdbvotes total using reduce and increment counter and then divide votes by counter return result

  const season15Votes =[];
  let season15Data = simpsonsData.filter(season => simpsonsData.season === 15);
  for (let i = 0; i < season15Data.length; i++){
    season15Votes.push(season15Data[i].imdb_votes);
  }
  // console.log(season15Votes);

let imdbAverage = (season15Votes.reduce((a, b) => a + b), 0) / season15Votes.length;
console.log(imdbAverage);
