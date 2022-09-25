import {
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  PhotoCamera,
  BookmarkIcon,
  BookmarkBorderSharp,
  AddCircle,
  EditAttributes,
  EditAttributesTwoTone,
  NavigateBefore,
  NavigateNext,
  NavigationOutlined,
  VolumeDown,
  VolumeUp,
  MailLock,
  MailLockOutlined,
  DoneAll,
  DeleteForever,
  Face2Outlined,
} from "@mui/icons-material";
import { Theme, useTheme } from "@mui/material/styles";
import {
  Button,
  ButtonGroup,
  IconButton,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Fab,
  RadioGroup,
  Radio,
  Box,
  Typography,
  Rating,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Stack,
  Slider,
  Switch,
  TextField,
  Badge,
  Chip,
} from "@mui/material";

import React from "react";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const label = { inputProps: { "aria-label": "Switch demo" } };
const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

export default function UIL() {
  const theme = useTheme();
  const personName = ["Oliver Hansen", "Kelly Snyder"];
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <>
      <h1>This is UI Library</h1>
      <h2>Buttons</h2>
      <h3>Buttons variants</h3>
      <Button>Defaul</Button>
      <br />
      <br />
      <Button variant="text">Text</Button>
      <br />
      <br />
      <Button variant="contained">Contained</Button>
      <br />
      <br />
      <Button variant="outlined">Outlined</Button>
      <br />
      <br />
      <h3>Button with event</h3>
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
        }}
      >
        Click me
      </Button>
      <br />
      <br />
      <h3>Button colors</h3>
      <Button color="secondary">Secondary</Button>
      <br />
      <br />
      <Button variant="contained" color="success">
        Success
      </Button>
      <br />
      <br />
      <Button variant="outlined" color="error">
        Error
      </Button>
      <br />
      <br />
      <h3>Button sizes</h3>
      <Button variant="contained" color="secondary" size="small">
        Small
      </Button>
      <br />
      <br />
      <Button variant="contained" color="secondary" size="medium">
        Medium
      </Button>
      <br />
      <br />
      <Button variant="contained" color="secondary" size="large">
        Large
      </Button>
      <br />
      <br />
      <h3>Upload Button</h3>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>

      <br />
      <br />
      <br />
      <br />
      <h2>Button group</h2>

      <h3>Simple Button Group</h3>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h3>Button variants</h3>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <br />
      <br />

      <h3>Size & Colors</h3>
      <ButtonGroup size="small" aria-label="small button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup size="large" aria-label="large button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br />
      <br />
      <br />
      <br />

      <h3>Vertical</h3>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <br />
      <br />
      <br />
      <br />

      <h2>Check boxes</h2>

      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />

      <br />
      <br />
      <h2>Form Label</h2>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>

      <br />
      <br />
      <br />

      <h3>Colors</h3>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />

      <br />
      <br />
      <br />

      <h3>Icon checkbox</h3>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Checkbox
        {...label}
        icon={<BookmarkBorder />}
        checkedIcon={<BookmarkBorderSharp />}
      />

      <h3>Label placement</h3>

      <FormControl component="fieldset">
        <FormLabel component="legend">Label placement</FormLabel>

        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Checkbox />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="End"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>

      <h2>Floating action Buttons</h2>

      <Fab color="primary" aria-label="add">
        <FavoriteBorder />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <AddCircle />
      </Fab>
      <Fab variant="extended">
        <EditAttributes />
      </Fab>
      <Fab disabled aria-label="like">
        <EditAttributesTwoTone />
      </Fab>

      <br />
      <br />
      <br />
      <br />

      <Fab variant="extended" size="small" color="primary" aria-label="add">
        <NavigateBefore sx={{ mr: 1 }} />
        Extended
      </Fab>
      <Fab variant="extended" size="medium" color="primary" aria-label="add">
        <NavigateNext sx={{ mr: 1 }} />
        Extended
      </Fab>
      <Fab variant="extended" color="primary" aria-label="add">
        <NavigationOutlined sx={{ mr: 1 }} />
        Extended
      </Fab>

      <br />
      <br />
      <br />
      <br />

      <h2>Radio Buttons</h2>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <br />
      <br />

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <br />
      <br />

      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Controlled</Typography>
        <Rating name="simple-controlled" value={4} />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={3} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={2} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Box>

      <br />
      <br />

      <h2>Select</h2>

      <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={20}
          label="Age"
          onChange={() => alert("handleChange")}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={10}
          onChange={() => alert("handleChange")}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={30}
          onChange={() => alert("handleChange")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          input={<OutlinedInput label="Name" />}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <br />
      <br />
      <br />

      <h2>Slider</h2>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider
          valueLabelDisplay="auto"
          aria-label="Volume"
          defaultValue={30}
          step={10}
          //marks
          min={10}
          max={110}
        />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />

      <br />
      <br />

      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />

      <br />
      <br />

      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />

      <br />
      <br />

      <Slider
        getAriaLabel={() => "Temperature range"}
        value={22}
        onChange={() => console.log("handleChange")}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <br />
      <br />

      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={26}
        onChange={() => console.log("handleChange")}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />

      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={33}
        onChange={() => console.log("handleChange")}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />

      <br />
      <br />

      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
      />

      <br />
      <br />

      <h2>Switch</h2>

      <div>
        <Switch {...label} defaultChecked />
        <Switch {...label} />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
      </div>

      <Switch {...label} defaultChecked />
      <Switch {...label} defaultChecked color="secondary" />
      <Switch {...label} defaultChecked color="warning" />
      <Switch {...label} defaultChecked color="default" />

      <br />
      <br />
      <br />
      <br />
      <br />

      <h2>TextField</h2>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <br />
      <br />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <br />
      <br />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <br />
      <br />
      <TextField label="Outlined secondary" color="secondary" focused />
      <br />
      <br />
      <TextField
        label="Filled success"
        variant="filled"
        color="success"
        focused
      />
      <br />
      <br />
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
      <br />
      <br />

      <h2>Bages</h2>
      <Badge badgeContent={4} color="primary">
        <MailLock color="action" />
      </Badge>
      <br />
      <br />
      <Badge badgeContent={4} color="secondary">
        <MailLockOutlined color="action" />
      </Badge>
      <br />
      <br />
      <Badge badgeContent={4} color="success">
        <MailLockOutlined color="action" />
      </Badge>

      <br />
      <br />

      <Badge color="secondary" badgeContent={99}>
        <MailLockOutlined />
      </Badge>
      <br />
      <br />
      <Badge color="secondary" badgeContent={100}>
        <MailLockOutlined />
      </Badge>
      <br />
      <br />
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MailLockOutlined />
      </Badge>

      <h2>Chip</h2>
      <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
      <br />
      <br />
      <Chip
        label="Clickable Link"
        component="a"
        href="#basic-chip"
        variant="outlined"
        clickable
      />
      <br />
      <br />
      <Chip label="Custom delete icon" deleteIcon={<DoneAll />} />
      <Chip
        label="Custom delete icon"
        deleteIcon={<DeleteForever />}
        variant="outlined"
      />

      <br />
      <br />
      <Chip icon={<Face2Outlined />} label="With Icon" />
      <Chip icon={<Face2Outlined />} label="With Icon" variant="outlined" />
      <br />
      <br />

      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

function valuetext(value) {
  return `${value}°C`;
}
