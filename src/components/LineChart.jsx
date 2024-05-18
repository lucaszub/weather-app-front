import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Constantes pour les années et les régions
const years = Array.from({ length: 15 }, (_, index) => 2010 + index);
const regions = [
  "Auvergne-Rhône-Alpes",
  "Bourgogne-Franche-Comté",
  "Bretagne",
  "Centre-Val de Loire",
  "Corse",
  "Grand Est",
  "Hauts-de-France",
  "Île-de-France",
  "Normandie",
  "Nouvelle-Aquitaine",
  "Occitanie",
  "Pays de la Loire",
  "Provence-Alpes-Côte d'Azur"
];

const Dashboard_Temperature = ({ isCustomLineColors = false }) => {
  const [temperature, setTemperature] = useState([]);
  const [year, setYear] = useState(2020);
  const [region, setRegion] = useState("Bretagne");
  const getMonthName = (monthNumber) => {
    const months = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    return months[monthNumber - 1] || "";
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/data?year=${year}&region=${region}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Données récupérées :", data);
        setTemperature(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [year, region]);

  const handleChangeYear = (event) => {
    setYear(event.target.value);
    console.log("Année sélectionnée :", event.target.value);
  };

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
    console.log("Région sélectionnée :", event.target.value);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <Select
              value={year}
              onChange={handleChangeYear}
            >
              {years.map((yearOption) => (
                <MenuItem key={yearOption} value={yearOption}>{yearOption}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FormControl variant="standard" sx={{ minWidth: 200 }}>
            <Select
              value={region}
              onChange={handleChangeRegion}
            >
              {regions.map((regionOption) => (
                <MenuItem key={regionOption} value={regionOption}>{regionOption}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ p: 2, height: "400px" , backgroundColor: "#FAFAFB"}}>
          <ResponsiveLine
            data={[
              {
                id: "Temperature",
                data: temperature.map((entry) => ({
                  x: getMonthName(entry["Month"]),
                  y: entry["Température moyenne (°C)"]
                }))
              }
            ]}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Mois",
              legendOffset: 36,
              legendPosition: "middle"
            }}
            axisLeft={{
              orient: "left",
              tickValues: 5,
              tickSize: 3,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Temperature",
              legendOffset: -40,
              legendPosition: "middle"
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={8}
            useMesh={true}
          />        
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard_Temperature;


