import React from 'react'
import {
    PieChart, Pie, Tooltip,
  } from 'recharts';

  const GraphGenero = () => {

    const fakedata01 = [
        { name: 'Mulheres', value: 350 }, { name: 'Homens', value: 5000 }, 
      ];

    return(
        <PieChart  
        width={200} height={150}>
            <Pie dataKey="value" isAnimationActive={true} data={fakedata01}  outerRadius={45} fill=" rgba(0,115,229,0.8)" label />
            <Tooltip />
        </PieChart>
    )
}

export default GraphGenero;