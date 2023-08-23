import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styles from './Graph.module.scss'
export function Graph({data, title} : {data: any, title : string}) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return <div className={styles.container}>
        <h3 className={styles.container__title}>{title}</h3>
        <Doughnut data={data} />
    </div>
}