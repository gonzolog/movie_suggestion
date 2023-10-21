// JavaScript program that recommends a movie based on emotion, current weather and age of audience

<<<<<<< HEAD
const create_movie = (title, emotion, weather, age_restriction) => {
    return {
        title,
        emotion, // Expected input: "Scared", "Happy", "Excited" or "Sad"
        weather, // Expected input: "Sun", "Rain" or "Snow"
        age_restriction // Expected input: Whole number greater than 0 
    }
};

// Using object factory to generate movies
    // Horrors
const the_shining = create_movie("The Shining", "scared", "snow", 15);
const the_ring = create_movie("The Ring", "scared", "rain", 15);
const midsommar = create_movie("Midsommar", "scared", "sun", 18);
    // Feel-Good
const groundhog_day = create_movie("Groundhog Day", "happy", "snow", 8);
const harry_potter = create_movie("Harry Potter", "happy", "rain", 8);
const mamma_mia = create_movie("Mamma Mia", "happy", "sun", 8);
    // Action
const everest = create_movie("Everest", "excited", "snow", 12)
const the_dark_knight = create_movie("The Dark Knight", "excited", "rain", 12)
const mission_impossible = create_movie("Mission Impossible", "excited", "sun", 12)
    // Depressing
const chronicles_of_narnia = create_movie("The Chronicles of Narnia", "sad", "snow", 8)
const schindlers_list = create_movie("Schindler's List", "sad", "rain", 15)
const a_man_called_otto = create_movie("A Man Called Otto", "sad", "sun", 15)

// Array containing every movies
movie_list = [the_shining, the_ring, midsommar, groundhog_day, har, mamma_mia, everest, the_dark_knight, mission_impossible, chronicles_of_narnia, schindlers_list, a_man_called_otto]
=======
const create_movie = (emotion, weather, age_restriction) => {
    return {
        emotion, // "Scared", "Happy", "Excited", "Sad"
        weather, // "Sun", "Rain", "Snow", "Dry"
        age_restriction // Any whole number input from 1 - 18+
    }
}

const the_shining = create_movie("scared", "snow", 15)
console.log(the_shining)
console.log("hello")
>>>>>>> 0bf0d90d8855fcd049e727219b08e73d7695b626
