import React from 'react'
import {
    PieChart, Pie, Tooltip,Cell
  } from 'recharts';

  const GraphProfissoes = () => {

    const fakedata04 = [
        { name: 'Engenheiro(a) de Software', value: 1000 }, { name: 'Cientista de Dados', value: 700 }, 
        { name: 'Professor(a)', value: 1000 }, { name: 'UI/UX Designer', value: 400 }
      ];

    return(
        <PieChart  
        width={180} height={150}>
          <Pie dataKey="value" isAnimationActive={true} data={fakedata04}  outerRadius={45}  label >
            <Cell fill={'#0073e5'}></Cell>
            <Cell fill={'#00ade5'}></Cell>
            <Cell fill={'#00c5e5'}></Cell>
            <Cell fill={'#00eee5'}></Cell>

          </Pie>
            
        </PieChart>
    )
}

export default GraphProfissoes;