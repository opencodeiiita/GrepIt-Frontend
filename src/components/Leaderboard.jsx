import React, { useState, useEffect } from 'react';
import { Card, Divider, Skeleton, Table, Typography } from 'antd';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const response = await axios.get(
        'https://randomuser.me/api/?results=10&inc=name,location'
      );
      if (response.status === 200) {
        const transformedData = response.data.results.map((user, index) => ({
          position: index + 1,
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          quizPoints: user.location.street.number
        }));
        setLeaderboardData([...leaderboardData, ...transformedData]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns = [
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      render: (text, record, index) => {
        if (index === 0) return '🥇';
        else if (index === 1) return '🥈';
        else if (index === 2) return '🥉';
        else return text;
      }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Quiz Points',
      dataIndex: 'quizPoints',
      key: 'quizPoints'
    }
  ];

  return (
    <Card title={<Typography.Text>Leaderboard</Typography.Text>}  size='small'>
      <InfiniteScroll
        dataLength={leaderboardData.length}
        next={loadData}
        hasMore={false}
        endMessage={<Divider plain>End of the Leaderboard</Divider>}
        loader={<Skeleton paragraph={{ rows: 1 }} active />}
      >
        <Table
          dataSource={leaderboardData}
          columns={columns}
          pagination={false}
        />
      </InfiniteScroll>
    </Card>
  );
};

export default Leaderboard;
