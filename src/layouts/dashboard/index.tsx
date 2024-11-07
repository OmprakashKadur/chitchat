import React, { useState } from "react";
import { Avatar, Box, IconButton, Stack } from "@mui/material";
import { faker } from "@faker-js/faker";
import { styled, useTheme } from "@mui/material/styles";
import { Nav_Buttons } from "../../data";
import { Outlet } from "react-router-dom";
import { Gear } from "phosphor-react";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import useSettings from "../../hooks/useSettings";
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1890ff",
        ...theme.applyStyles("dark", {
          backgroundColor: "#177ddc",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255,255,255,.35)",
    }),
  },
}));

const DashboardLayout = () => {
  const Logo = require("../../assets/Images/logo.ico");
  const theme = useTheme();
  console.log(theme);
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  return (
    <Stack direction="row">
      <Box
        padding={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0 ,0.25)",
          width: 100,
          height: "100vh",
        }}
      >
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems={"center"}
          spacing={3}
          sx={{
            height: "100%",
          }}
        >
          <Stack alignItems="center" spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 2.5,
              }}
            >
              <img alt="Logo" src={Logo} />
            </Box>
            <Stack
              spacing={3}
              sx={{ width: "max-content", alignItems: "center" }}
              direction="column"
            >
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton sx={{ color: "#fff" }} key={el.index}>
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{
                        color: theme.palette.mode === "light" ? "#000" : "#fff",
                      }}
                      onClick={() => setSelected(el.index)}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                )
              )}
              <Divider sx={{ width: "48px" }}></Divider>
              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  <IconButton sx={{ color: "#fff" }}>
                    <Gear size={32} />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                  }}
                  onClick={() => setSelected(3)}
                >
                  <Gear size={32} />
                </IconButton>
              )}
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <AntSwitch
                onChange={() => {
                  onToggleMode();
                }}
                defaultChecked
                inputProps={{ "aria-label": "ant design" }}
              />
            </Stack>

            <Avatar src={faker.image.avatar()} alt="Profile"></Avatar>
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
