
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  selectList,
  selectFavList,
  moveToFav,
  selectCurPlace,
  setCur
} from './weatherSlice';
import styles from './Weather.module.css';

export function Weather() {
  const list = useAppSelector(selectList);
  const favList = useAppSelector(selectFavList);
  const curPlace = useAppSelector(selectCurPlace);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styles.row}>
        <ul>
          {list.map(l =>
            <li key={l.id} onClick={() => dispatch(setCur(l.id))}>
              {l.name} <button className={styles.button} onClick={() => { dispatch(moveToFav({ id: l.id, favorites: true })) }}>to fav</button>
            </li>
          )}
        </ul>
        <div>
          {
            <div key={curPlace.id}>
              <h1>{curPlace.name}</h1>
              <h2>Temp: {curPlace.temp}°</h2>
              <h2>Min: {curPlace.min}°</h2>
              <h2>Max: {curPlace.max}°</h2>
              <h2>Wind: {curPlace.wind}m/s</h2>
            </div>
          }
        </div>
        <ul>
          {favList.map(l =>
            <li key={l.id}>
              {l.name} <button className={styles.button}  onClick={() => { dispatch(moveToFav({ id: l.id, favorites: false })) }}>from fav</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
