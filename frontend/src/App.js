function App() {
  const callApi = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, World!</h1>
      <button onClick={callApi}>Call Backend API</button>
    </div>
  );
}

export default App;
