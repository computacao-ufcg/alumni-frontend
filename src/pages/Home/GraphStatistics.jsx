import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { backend } from '../../services/api';

const GraphStatistics = (props) => {

  const [statistics, setStatistics] = useState('')

  useEffect(() => {
      getStatistics()
  }, [])

  const getStatistics = async () => {
      try {
        const res = await backend.get(`/statistics?courseName=computing-science&level=undergraduate`, { headers: {'Authentication-Token': localStorage.getItem('token')}})
        console.log(res)
        setStatistics(res.data)
        console.log(res.data)
        console.log(formatData())
      } catch (err) {
        console.log(err.response)
      }
  }

//tentativa de funcao para formatar dados (alumni antigo)
  const formatData = () => {
      return [
        {
          name: "numberAcademyEmployedCourse",
          value: statistics.numberAcademyEmployedCourse
        },
        {
          name: "numberAcademyEmployedLevel",
          value: statistics.numberAcademyEmployedLevel
        },
        {
          name: "numberAlumniCourse",
          value: statistics.numberAlumniCourse
        },
        {
          name: "numberAlumniLevel",
          value: statistics.numberAlumniLevel
        },
        {
          name: "numberGovernmentEmployedCourse",
          value: statistics.numberGovernmentEmployedCourse
        },
        {
          name: "numberGovernmentEmployedLevel",
          value: statistics.numberGovernmentEmployedLevel
        },
        {
          name: "numberIndustryEmployedCourse",
          value: statistics.numberIndustryEmployedCourse
        },
        {
          name: "numberMappedAlumniCourse",
          value: statistics.numberMappedAlumniCourse
        },
        {
          name: "numberMappedAlumniLevel",
          value: statistics.numberMappedAlumniLevel
        },
        {
          name: "numberOngEmployedLevel",
          value: statistics.numberOngEmployedLevel
        },
        {
          name: "numberOthersEmployedCourse",
          value: statistics.numberOthersEmployedCourse
        },
        {
          name: "numberOthersEmployedLevel",
          value: statistics.numberOthersEmployedLevel
        }
      ]
  }

//mock dos dados 
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
  ]
  
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


