import React from 'react'
import {
    PieChart, Pie, Tooltip,
  } from 'recharts';

  const GraphLocal = () => {

    const fakedata03 = [
        { name: 'Exterior', value: 1350 }, { name: 'Brasil', value: 4700 }, 
      ];

    return(
        <PieChart  
        width={180} height={150}>
            <Pie dataKey="value" isAnimationActive={true} data={fakedata03}  outerRadius={45} fill=" rgba(0,115,229,0.8)" label />
            <Tooltip />
        </PieChart>
    )
}

export default GraphLocal;