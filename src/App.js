import { Box, Container, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box > 
      <Navbar />
      <Stack direction="row" spacing={0} justifyContent={"space-between"}>
        <Sidebar />
        <Feed /> {/* Add left margin here */}
        {/* <Rightbar /> */}
      </Stack>
    </Box>
  );
}

export default App;
