import { Table, Input } from 'antd';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

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
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const requestTasks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          title: searchValue || undefined
        }
      });
      setTasks(response.data);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  }, [searchValue]);

  useEffect(() => {
    requestTasks();
  }, [requestTasks]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const renderContent = () => {
    return (
      <>
        <Input
          placeholder='Buscar tarefa por título'
          onChange={handleChange}
          value={searchValue}
        />
        <Table
          dataSource={tasks}
          columns={columns}
          size='small'
          loading={loading}
          rowKey='id'
        // rowKey={task => task.id}
        />
      </>
    )
  }

  return (
    <div>
      {renderContent()}
    </div>
  )
};

export default Tasks;
