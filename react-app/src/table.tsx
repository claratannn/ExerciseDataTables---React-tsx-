import React, { useRef, useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net';

const tableData = [
    { VehicleId: '132456', Type: 'Scooter', LockUnlock: 'Lock', CurrentSpeed: '0 km/h', BatteryLevel: '100%', Status: 'PARKING', Location: '3.142.012', LastUpdated: '2019-07-02 9.00AM' },
    { VehicleId: '987654', Type: 'Scooter', LockUnlock: 'UnLock', CurrentSpeed: '5 km/h', BatteryLevel: '75%', Status: 'MOVING', Location: '2.125.114', LastUpdated: '2019-07-02 10.00AM' },
    { VehicleId: '569825', Type: 'Scooter', LockUnlock: 'UnLock', CurrentSpeed: '0 km/h', BatteryLevel: '50%', Status: 'IDLING', Location: '4.125.114', LastUpdated: '2019-07-02 10.00AM' },
    { VehicleId: '125864', Type: 'Scooter', LockUnlock: 'Lock', CurrentSpeed: '0 km/h', BatteryLevel: '15%', Status: 'TOWING', Location: '5.125.114', LastUpdated: '2019-07-02 10.00AM' },
    { VehicleId: '125864', Type: 'Scooter', LockUnlock: 'Lock', CurrentSpeed: '0 km/h', BatteryLevel: '0%', Status: 'TOWING', Location: '5.125.114', LastUpdated: '2019-07-02 10.00AM' },
];

function Table() {
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        $(tableRef.current!).DataTable();
    }, []);

    return (
        <table ref={tableRef} id="example" className="display">
          <thead className="table-light text-center">
            <tr>
              <th>#</th>
              <th>Vehicle ID</th>
              <th>Type</th>
              <th>Lock/Unlock</th>
              <th>Current Speed</th>
              <th>Battery Level</th>
              <th>Status</th>
              <th>Location</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.VehicleId}</td>
                <td>{row.Type}</td>
                <td>{row.LockUnlock}</td>
                <td>{row.CurrentSpeed}</td>
                <td>{row.BatteryLevel}</td>
                <td>{row.Status}</td>
                <td>{row.Location}</td>
                <td>{row.LastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
    );
};


export default Table;
