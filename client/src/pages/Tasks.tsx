import { useState, useEffect } from 'react';
import ServerClient from '../services/ServerClient';
import Grid from '../components/Grid';
import Tab from '../components/Tab';
import Button from '../components/Button';
import AssignTask from './AssignTask';

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('My Tasks');
  const [assignTaskOpen, setAssignTaskOpen] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');
  const [selectedDocumentType, setSelectedDocumentType] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const serverClient = new ServerClient('/api/retrieveTasks');
        const res = await serverClient.get({});
        // console.log('res', res.data);
        setTaskData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchTaskData();
  }, []);

  // assign task button
  const handleClickAssignTask = () => {
    setAssignTaskOpen(true);
  };

  // submission
  const onSubmit = async () => {
    try {
      const serverClient = new ServerClient('/api/assignTasks');
      const res = await serverClient.post({ taskName: selectedTask, documentType: selectedDocumentType, description });
      // console.log('res', res.data);
      setAssignTaskOpen(false);
      setSelectedTask('');
      setSelectedDocumentType('');
      setDescription('');
    } catch (error) {
      console.error('Error', error);
    }
  };

  // task radio
  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('handleChangeTask', e.target.value);
    setSelectedTask(e.target.value);
  };
  // document type radio
  const handleChangeDocumentType = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('handleChangeDocumentType', e.target.value);
    setSelectedDocumentType(e.target.value);
  };
  // description
  const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log('handleChangeDescription', e.target.value);
    setDescription(e.target.value);
  };

  return (
    <div className='p-14'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-medium py-4'>Tasks Management</h1>
          <Button buttonName='Assign Task' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-2' buttonClick={handleClickAssignTask} />
        </div>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'My Tasks' && <Grid taskData={taskData} />}
      </div>
      {assignTaskOpen && (
        <AssignTask
          onSubmit={onSubmit}
          selectedTask={selectedTask}
          description={description}
          selectedDocumentType={selectedDocumentType}
          handleChangeTask={handleChangeTask}
          handleChangeDocumentType={handleChangeDocumentType}
          handleChangeDesc={handleChangeDesc}
        />
      )}
    </div>
  );
};

export default Tasks;
