let FOOD_OFFERS = [
    {
        "name":"Radina",
        "food":"Pizza night!",
        "description":"Homemade pizzas with your favourite toppings!",
        "filter":"vegetarian",
        "distance":"1",
        "people": ["Radina","Sophie", "Slavka"],
        "joined": true,
        "previewImage": require('../Resources/Elements/Pizza.png'),
        "latitude": 51.5200,
        "longitude": 0.1454
    },
    {
        "name":"Sophie",
        "food":"Donuts",
        "description":"Yes, I do make these myself!",
        "filter":"vegan",
        "distance":"0.1",
        "people":["Sophie","Alina"],
        "joined": false,
        "previewImage": require('../Resources/Elements/donutnew.png'),
        "latitude": 51.5010,
        "longitude": 0.1730
    },
    {
        "name":"Slavka",
        "food":"Pizza",
        "description":"A secret mix of four cheeses guaranteed to steal your heart.",
        "filter":"vegan",
        "distance":"0.33",
        "people":["Slavka","Annie", "Kathie", "Radina"],
        "joined": false,
        "previewImage": require('../Resources/Elements/Pizza.png'),
        "latitude": 51.5030,
        "longitude": 0.1730
    }
];

export default FOOD_OFFERS;
