// JavaScript program that recommends a movie based on emotion, current weather and age of audience

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