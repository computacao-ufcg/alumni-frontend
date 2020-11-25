import React from 'react'
import {
    PieChart, Pie, Tooltip, Cell,
  } from 'recharts';

  const GraphGenero = () => {

    const fakedata01 = [
        { name: 'Mulheres', value: 350 }, { name: 'Homens', value: 5000 }, 
      ];

    return(
        <PieChart  
        width={200} height={150}>
            <Pie dataKey="value" isAnimationActive={true} data={fakedata01}  outerRadius={45} label >
              <Cell fill={'#0073e5'}></Cell>
              <Cell fill={'#00ade5'}></Cell>
            </Pie>
            <Tooltip />
        </PieChart>
    )
}

export default GraphGenero;