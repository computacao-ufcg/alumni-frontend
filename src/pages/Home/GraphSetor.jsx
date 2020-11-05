import React from 'react'
import {
    PieChart, Pie, Legend, Tooltip,
  } from 'recharts';

  const GraphSetor = () => {

    const fakedata02 = [
        { name: 'Publico', value: 850 }, { name: 'Privado', value: 4500 }, 
      ];

    return(
        <PieChart  
        width={190} height={150}>
            <Pie dataKey="value" isAnimationActive={true} data={fakedata02} outerRadius={45} fill= 'rgba(0,115,229,0.8)' label />
            <Tooltip />
        </PieChart>
    )
}

export default GraphSetor;