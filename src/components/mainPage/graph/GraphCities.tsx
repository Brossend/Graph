import { ResponsivePie } from '@nivo/pie'

import styles from './Graph.module.scss'
export function GraphCities({data} : {data : any}) {

    return <div className={styles.container}>
        <h3 className={styles.container__title}>Города</h3>

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
                    translateY: 61,
                    itemsSpacing: -20,
                    itemWidth: 40,
                    itemHeight: 40,
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