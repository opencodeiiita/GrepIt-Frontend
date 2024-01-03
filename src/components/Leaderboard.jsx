import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import './Leaderboard.css';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          const transformedData = data.map((user, index) => ({
            position: index + 1,
            name: user.name,
            uid: user.id,
            quizPoints: Math.floor((12-index)*100+(10*(12-index)+((12-index+1)*5)-index)), 
          }));
          setLeaderboardData(transformedData);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

  const columns = [
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'UID',
      dataIndex: 'uid',
      key: 'uid',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quiz Points',
      dataIndex: 'quizPoints',
      key: 'quizPoints',
    },
  ];

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <Table  dataSource={leaderboardData} columns={columns} pagination={false} />
    </div>
  );
};

export default Leaderboard;
