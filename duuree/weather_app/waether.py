def weather(request):
    city = request.GET.get('city', '')

    if city:
        api_key = 'ad88e15b1e7b6a80c4e581daffd0580e'  # Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key

        # Make the API call
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
        response = requests.get(url)
        data = response.json()

        # Process the response and extract the required weather details
        temperature = data['main']['temp']
        description = data['weather'][0]['description']

        # Save the weather data to the Weather model
        weather_data = Weather(city=city, temperature=temperature, description=description)
        weather_data.save()

    return render(request, 'weather.html')