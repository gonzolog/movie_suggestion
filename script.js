// JavaScript program that recommends a movie based on emotion, current weather and age of audience


// Factory function to create a movie and assign properties
const create_movie = (_title, _emotion, _weather, _maturity_rating) => {
    return {
        _title,
        _emotion, // Expected input: "scared", "happy", "excited" or "sad"
        _weather, // Expected input: "sun", "rain" or "snow"
        _maturity_rating, // Expected input: "kids" or "adult"
        get title() {
            return this._title;
        },
        get emotion() {
            return this._emotion;
        },
        get weather() {
            return this._weather;
        },
        get maturity_rating() {
            return this._maturity_rating;
        }
    }
};

// Using object factory to generate movies
// More movies can be added using (const movie_name = create_movie("title", "emotion", "weather", "maturity_rating")
    // Horrors
const the_shining = create_movie("The Shining", "scared", "snow", "adult");
const the_ring = create_movie("The Ring", "scared", "rain", "adult");
const midsommar = create_movie("Midsommar", "scared", "sun", "adult");
    // Feel-Good
const groundhog_day = create_movie("Groundhog Day", "happy", "snow", "kids");
const harry_potter = create_movie("Harry Potter", "happy", "rain", "kids");
const mamma_mia = create_movie("Mamma Mia", "happy", "sun", "kids");
    // Action
const everest = create_movie("Everest", "excited", "snow", "kids")
const the_dark_knight = create_movie("The Dark Knight", "excited", "sun", "kids")
const mission_impossible = create_movie("Mission Impossible", "excited", "rain", "kids")
const hunger_games = create_movie("The Hunger Games", "excited", "rain", "kids")
    // Depressing
const chronicles_of_narnia = create_movie("The Chronicles of Narnia", "sad", "snow", "kids")
const schindlers_list = create_movie("Schindler's List", "sad", "rain", "adult")
const a_man_called_otto = create_movie("A Man Called Otto", "sad", "sun", "adult")

// Array containing every movie
movie_list = [the_shining, the_ring, midsommar, groundhog_day, harry_potter, mamma_mia, everest, the_dark_knight, mission_impossible, chronicles_of_narnia, schindlers_list, a_man_called_otto, hunger_games]

// A function to get a random movie from the filtered list
const getRandomMovie = filtered_movie_list => {
    return filtered_movie_list[Math.floor(Math.random() * filtered_movie_list.length)];
}

// Function that takes three arguments and recommends movie based on user input
// Expected input:
    // Emotion: "happy", "sad", "excited", "scared"
    // Weather: "sun", "rain", "snow"
    // Maturity rating: "kids" or "adult"
const suggest_movie = (emotion, weather, maturity_rating) => {
    maturity_rating = maturity_rating.toLowerCase();
    emotion = emotion.toLowerCase();
    weather = weather.toLowerCase();
    let new_movie_list = [];
    let valid_input = ["happy", "sad", "excited", "scared", "sun", "rain", "snow", "kids", "adult"]
    if (valid_input.includes(emotion) && valid_input.includes(weather) && valid_input.includes(maturity_rating)) {
        for (let movie in movie_list) {
            if (movie_list[movie].emotion === emotion && movie_list[movie].weather === weather && movie_list[movie].maturity_rating === maturity_rating) {
                new_movie_list.push(movie_list[movie].title)
            }
        }
        if (new_movie_list.length > 0) {
            let movie_recommendation = getRandomMovie(new_movie_list);
            console.log(`A great movie to watch would be ${movie_recommendation}`) 
        } else {
            console.log('Oh no! I wasn\'t able to find any films that matched your criteria.')
        }
    } else {
        console.log("Invalid Input")
    }
};

// Troubleshooting
suggest_movie("happy", "rain", "kids") // Output: Harry Potter
suggest_movie("scared", "sun", "adult") // Output: Midsommar
suggest_movie("excited", "rain", "kids") // Output: Either Mission Impossible or The Hunger Games
suggest_movie("scared", "snow", "kids") // Output: Oh no! I wasn't able to find any films that matched your criteria.
suggest_movie("excited", "windy", "kids") // Output: Invalid Input
