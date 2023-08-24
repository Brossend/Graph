import { ResponsivePie } from '@nivo/pie'

import styles from './Graph.module.scss'
export function GraphCountries({data, title, text, count} : {data : any, title : string, text : string, count : boolean}) {

    return <div className={styles.container}>
        <h3 className={styles.container__title}>Страны</h3>

        <div className={count ? styles.container__legendFirstCount : styles.container__legend}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>

        <ResponsivePie
            data={data}
            margin={{ top: -30, right: 10, bottom: 80, left: 10 }}
            startAngle={-90}
            innerRadius={0.78}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'set1' }}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            enableArcLabels={false}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 10,
                    itemHeight: 30,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    </div>
}