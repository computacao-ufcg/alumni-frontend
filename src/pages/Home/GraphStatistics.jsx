import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const GraphStatistics =(props) => {

  const data2 = props.data;
  console.log('data2',data2)
  const data = [
      {
        name: "numberAcademyEmployedCourse",
        value: 0
      },
      {
        name: "numberAcademyEmployedLevel",
        value: 0
      },
      {
        name: "numberAlumniCourse",
        value: 0
      },
      {
        name: "numberAlumniLevel",
        value: 3
      },
      {
        name: "numberGovernmentEmployedCourse",
        value: 0
      },
      {
        name: "numberGovernmentEmployedLevel",
        value: 0
      },
      {
        name: "numberIndustryEmployedCourse",
        value: 0
      },
      {
        name: "numberMappedAlumniCourse",
        value: 0
      },
      {
        name: "numberMappedAlumniLevel",
        value: 0
      },
      {
        name: "numberOngEmployedLevel",
        value: 0
      },
      {
        name: "numberOthersEmployedCourse",
        value: 0
      },
      {
        name: "numberOthersEmployedLevel",
        value: 0
      }
  ];
  
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name'/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      );
}

export default GraphStatistics

