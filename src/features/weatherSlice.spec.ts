import weatherReducer, {
    WeatherState,
    setCur,
} from './weatherSlice';

describe('weather reducer', () => {
    const initialState: WeatherState = {
        curPlace: 0,
        list: [
            {
                id: 0,
                name: "Алматы",
                temp: 20,
                min: 18,
                max: 25,
                wind: 5
            },
        ]
    };

    it('should handle initial state', () => {
        expect(weatherReducer(undefined, { type: 'unknown' })).toEqual({
            curPlace: 0,
            list: [
                {
                    id: 0,
                    name: "Алматы",
                    temp: 20,
                    min: 18,
                    max: 25,
                    wind: 5
                },
                {
                    id: 1,
                    name: "Москва",
                    temp: 20,
                    min: 20,
                    max: 28,
                    wind: 1
                },
                {
                    id: 3,
                    name: "Стамбул",
                    temp: 30,
                    min: 20,
                    max: 35,
                    wind: 8
                },
                {
                    id: 4,
                    name: "Дубай",
                    temp: 40,
                    min: 30,
                    max: 48,
                    wind: 1
                },
                {
                    id: 5,
                    name: "Бишкек",
                    temp: 24,
                    min: 20,
                    max: 28,
                    wind: 1
                }
            ]
        });
    });

    it('should handle setCur', () => {
        const actual = weatherReducer(initialState, setCur(5));
        expect(actual.curPlace).toEqual(5);
    });

});