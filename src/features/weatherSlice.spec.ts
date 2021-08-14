import weatherReducer, {
    WeatherState,
    moveToFav, setCur,
} from './weatherSlice';

describe('weather reducer', () => {
    const initialState: WeatherState = {
        curPlace: 0,
        list: [
            {
                id: 0,
                name: "Алматы",
                favorites: false,
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
                    favorites: false,
                    temp: 20,
                    min: 18,
                    max: 25,
                    wind: 5
                },
                {
                    id: 1,
                    name: "Москва",
                    favorites: false,
                    temp: 20,
                    min: 20,
                    max: 28,
                    wind: 1
                },
                {
                    id: 3,
                    name: "Стамбул",
                    favorites: false,
                    temp: 30,
                    min: 20,
                    max: 35,
                    wind: 8
                },
                {
                    id: 4,
                    name: "Дубай",
                    favorites: false,
                    temp: 40,
                    min: 30,
                    max: 48,
                    wind: 1
                },
                {
                    id: 5,
                    name: "Бишкек",
                    favorites: false,
                    temp: 24,
                    min: 20,
                    max: 28,
                    wind: 1
                }
            ]
        });
    });

    it('should handle moveToFav false', () => {
        const actual = weatherReducer(initialState, moveToFav({ id: 0, favorites: false }));
        expect(actual.list.filter(x => x.favorites).length).toEqual(0);
    });

    it('should handle moveToFav true', () => {
        const actual = weatherReducer(initialState, moveToFav({ id: 0, favorites: true }));
        expect(actual.list.filter(x => x.favorites).length).toEqual(1);
    });

    it('should handle setCur', () => {
        const actual = weatherReducer(initialState, setCur(5));
        expect(actual.curPlace).toEqual(5);
    });

});