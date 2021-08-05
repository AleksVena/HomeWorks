export interface City{
    id: number;
    name: string;
    coord: {};
    country: string;
    population: number
    timezone: number;
  }
  
  export interface Temp{
    day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
  }
  
  export interface FeelsLike{
    day: number;
    night: number;
    eve: number;
    morn: number;
  }
  
  export interface WeatherPerDate{
    dt: number;
    sunrise: number;
    sunset: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    weather: [];
    speed: number;
    deg: number;
    gust: number;
    clouds: number;
    pop: number;
    rain: number
  }
  
  export interface WeatherResponse {
     city: City;
     cod: string;
     message: number;
     cnt: number;
     list: WeatherPerDate[];
  }
  
  export function fetchWeather(cityName: string, monthCount: number){
    return new Promise<{ data: WeatherResponse }>( (resolve) =>{    
      fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&cnt=${monthCount}`).then(res => res.json()).then(json => {
        resolve({ data: json })
      });
    }    
    ); 
  }
  
  