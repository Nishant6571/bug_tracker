import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setbugdata } from "../redux/Actions";
import Bugscard from "../components/Bugscard";

const Tracker = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [severity, setSeverity] = useState("");
  const dispatch = useDispatch();
  const bugsdata = useSelector((state) => state.auth.bugsdata);
  console.log("//////", bugsdata);
  useEffect(() => {
    const fetchBugs = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:3000/api/bugs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(setbugdata(response.data.bugs));
        console.log(response.data); // Logging the fetched bugs data
      } catch (error) {
        console.error("Error fetching bugs:", error);
      }
    };
    fetchBugs();
  }, []);

  const postBug = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/bugs",
        {
          title,
          description,
          source,
          severity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("New bug added:", response.data);
    } catch (error) {
      console.error("Error adding bug:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postBug();
  };

  return (
    <>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="md"
        display={"flex"}
        flexDirection={"column"}
        w="100%"
        h="200px"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <form
          display={"flex"}
          flexDirection={"column"}
          w="100%"
          h="200px"
          onSubmit={handleSubmit}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            h="200px"
            w="100%"
            spacing={4}
            gap={"10px"}
          >
            <Box display={"flex"} flexDirection={"row"} w="100%">
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Source</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter source"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Severity</FormLabel>
                <Select
                  placeholder="Select severity"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                >
                  <option value="Critical">Critical</option>
                  <option value="Major">Major</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Select>
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button type="submit" colorScheme="blue">
                Add Bug
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Box
          style={{
            width: "25%",
            padding: "10px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        >
          {bugsdata.map((bug) => {
            <Bugscard ele={bug} />;
          })}
        </Box>
        <Box
          style={{
            width: "25%",
            padding: "10px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        ></Box>
        <Box
          style={{
            width: "25%",
            padding: "10px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        ></Box>
        <Box
          style={{
            width: "25%",
            padding: "10px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        ></Box>
      </Box>
    </>
  );
};

export default Tracker;
