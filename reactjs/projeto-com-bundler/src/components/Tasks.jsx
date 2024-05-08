import { Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Concluída',
    dataIndex: 'completed',
    key: 'completed',
    render: (value) => {
      // return value ? 'Sim' : 'Não';
      // return (
      //   <Checkbox checked={value} />
      // )
      return value ? '✅' : '❌';
    }
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const requestTasks = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTasks(response.data);
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    requestTasks();
  }, []);

  return (
    <Table
      dataSource={tasks}
      columns={columns}
      size='small'
    />
  )
};

export default Tasks;
