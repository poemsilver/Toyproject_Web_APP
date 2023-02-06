import requests

def get_weather(location):
    api_key = "your_api_key_here"
    response = requests.get(f"http://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}")
    data = response.json()
    weather = data["weather"][0]["main"].lower()
    return weather

def get_recommendation(weather):
    if weather == "clear":
        return [
            "Local Park",
            "Botanical Garden",
            "Beach",
            "Mountain",
            "City Center Plaza"
        ]
    else:
        return [
            "Art Museum",
            "Food Market",
            "Coffee Shop",
            "Movie Theater",
            "Board Game Cafe"
        ]

location = input("Enter a location in Korea: ")
weather = get_weather(location)
recommendations = get_recommendation(weather)

print(f"The current weather in {location} is {weather}.")
print(f"Here are some recommended dating places in {location}:")
for i, recommendation in enumerate(recommendations):
    print(f"{i + 1}. {recommendation}")
