import Table from './message'; // Adjust the path based on your project structure

const VehicleManagementCard = () => {
  return (
    <div className="" style={{ margin: ' margin: 250px auto'}}>
      <div className="card">
        <div className="card-header text-center" style={{ backgroundColor: '#80dcac', color: 'black' }}>
          <h5>Vehicle Management</h5>
        </div>
        <div>
          <button className="btn btn-primary float-right border-0 mt-4" style={{ backgroundColor: '#80dcac', color: 'black', borderRadius: '20px', float: 'right', marginRight: '18px' }}>+ New Vehicle</button>
        </div>
        <div className="card-body">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default VehicleManagementCard;
