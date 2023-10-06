export default function User({ user }) {
    // Render user data
    return (
      <div style={{ width: '100%', height: '100vh', padding: 50 }}>
        <p>First Name {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>Job: {user.job}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Country: {user.country}</p>
      </div>
    );
  }
  
  export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;
    const URL = `https://api.slingacademy.com/v1/sample-data/users/${id}`;
  
    // Fetch data from external API
    const res = await fetch(URL);
    const data = await res.json();
    const user = data.user;
  
    // Pass data to the page via props
    return { props: { user } };
  }