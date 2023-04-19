function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobail</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobail}</td>
              <td>{data.address}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
