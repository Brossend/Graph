import {GraphCountres} from '../../components/mainPage/graph/GraphCountres'

import {countCountries} from "../../data/countries/countCountries";
import {revenueCountries} from "../../data/countries/revenueCountries";
import {countCities} from "../../data/cities/countCities";
import {revenueCities} from "../../data/cities/revenueCities";

import toggleIcon from '../../image/controlBlock/toggle-left.svg';

import styles from './MainPage.module.scss'
import {GraphCities} from "../../components/mainPage/graph/GraphCities";

export function MainPage() {
    return <div className={styles.container}>
        <div className={styles.container__control}>
            <p className={styles.container__modeIsActive}>Предыдущий период</p>
            <button className={styles.container__button}>
                <img src={toggleIcon} alt={'toggle'}/>
            </button>
            <p className={styles.container__mode}>План</p>
        </div>
        <h1 className={styles.container__title}>Продажи</h1>
        <div className={styles.container__description}>
            <p className={styles.container__name}>Количество проданных пицц</p>
            <div className={styles.container__line}></div>
            <p className={styles.container__name}>Выручка</p>
            <div className={styles.container__line}></div>
        </div>
       <div className={styles.container__graph}>
           <GraphCountres data={countCountries} title={'335'} text={'шт.'} count={true} />
           <GraphCities data={countCities} title={'1065'} text={'шт.'} count={true}/>
           <GraphCountres data={revenueCountries}  title={'$ 130'} text={'млн.'} count={false} />
           <GraphCities data={revenueCities} title={'$ 130'} text={'млн.'} count={false}/>
       </div>
    </div>
}