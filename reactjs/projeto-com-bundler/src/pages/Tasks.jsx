import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'antd';
import axios from 'axios';

import TaskCompleted from '../components/TaskCompleted';
import InputText from '../components/InputText';
import fakeAuth from '../utils/fake-auth';

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
      return <TaskCompleted completed={value} />;
    }
  },
];

const Tasks = () => {
  const navigate = useNavigate();

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

  const validateSearch = (value) => {
    if (!value) {
      return 'Informe o termo de busca desejado.';
    }
    if (value.length > 20) {
      return 'O termo de busca deve possuir até 20 caracteres';
    }
    return undefined;
  }

  const handleLogout = () => {
    fakeAuth.isAuthenticated = false;
    navigate('/');
  }

  const renderContent = () => {
    return (
      <>
        <Button type='text' danger onClick={handleLogout}>
          Sair
        </Button>
        <br />
        <InputText
          placeholder='Buscar tarefa por título'
          onChange={handleChange}
          value={searchValue}
          label="Buscar"
          validate={validateSearch}
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
