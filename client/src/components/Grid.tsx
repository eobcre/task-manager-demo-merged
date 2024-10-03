import Button from './Button';

interface Task {
  _id: string;
  taskName: string;
  documentType: string;
  createdAt: string;
}

interface GridProps {
  taskData: Task[];
}

const Grid: React.FC<GridProps> = ({ taskData }) => {
  return (
    <div className='border border-slate-500 rounded-md w-full h-auto'>
      {/* header row */}
      <div className='col-span-4 grid grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.4fr] text-white font-bold bg-purple opacity-90 border-b border-slate-400 p-4'>
        <div>Task</div>
        <div>Assigned By</div>
        <div>Document Type</div>
        <div>Date</div>
        <div></div>
      </div>
      {/* data row */}
      {taskData.map((cell) => (
        <div key={cell._id} className='col-span-4 grid grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.4fr] text-dark border-b border-slate-300 p-4'>
          <div>{cell.taskName}</div>
          <div>Jane Smith</div>
          <div>{cell.documentType}</div>
          <div>{new Date(cell.createdAt).toLocaleDateString()}</div>
          <div>
            <Button buttonName='View' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-1' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
