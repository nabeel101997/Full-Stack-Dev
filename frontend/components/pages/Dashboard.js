import { useQueryClient, useMutation } from 'react-query';
import classes from './Dashboard.module.css';
import swal from 'sweetalert';


function Dashboard(props) {
  const queryClient = useQueryClient();
  function editHandler(record) {
    props.editRecod({
      id: record._id,
      name: record.name,
    });
  }

  async function deleteHandler(record) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then(async (willDelete) => {
        if (willDelete) {
          const response = await fetch('/api/delete-record', {
            method: 'DELETE',
            body: JSON.stringify(record),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          swal("Poof! Your Record has been deleted!", {
            icon: "success",
          });
          const data = await response.json();
          queryClient.invalidateQueries("records")
          return data;
        } else {
          swal("Your Record is safe!");
        }
      });
  }

  const mutation = useMutation((record) => deleteHandler(record), { mutationKey: "delete" });
  const { isLoading, isError, error, isSuccess } = mutation;

  return (
    <>
      {isError && <div>An error occurred: {error.message}</div>}

      {isLoading && <div>Loading...</div>}

      {isSuccess && <div>success</div>}
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.th}>User Name</th>
            <th className={classes.th} >Role</th>
            <th className={classes.th}>Permissions</th>
            <th className={classes.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.records?.map((record) => (
            <tr key={record._id}>
              <td className={classes.td}>{record.name}</td>
              <td className={classes.td}>{record.role}</td>
              <td className={classes.td}>{record.permissions}</td>
              <td className={classes.td}>
                <button className={classes.button} onClick={() => editHandler(record)}>Edit</button>
                <button className={classes.button, classes.mr20} onClick={() => mutation.mutate(record)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Dashboard;
