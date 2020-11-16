import React from 'react'
import {
    PieChart, Pie, Tooltip,Cell
  } from 'recharts';

  const GraphSetor = () => {

    const fakedata02 = [
        { name: 'Publico', value: 850 }, { name: 'Privado', value: 4500 }, 
      ];

    return(
        <PieChart  
        width={190} height={150}>
            <Pie dataKey="value" isAnimationActive={true} data={fakedata02} outerRadius={45} fill= 'rgba(0,115,229,0.8)' label >
              <Cell fill={'#0073e5'}></Cell>
              <Cell fill={'#00ade5'}></Cell>
            </Pie>
            <Tooltip />
        </PieChart>
    )
}

export default GraphSetor;