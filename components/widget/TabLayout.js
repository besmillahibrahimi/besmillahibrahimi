import {Box, Tab, Tabs} from "@mui/material";
import {useState} from "react";

function TabPanel({children, value, index, ...other}) {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabLayout = ({tabs, bodies, childProps}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getChildProps = (index) => Array.isArray(childProps) ? childProps[index] : childProps;

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {tabs.map((tab, index) => (
                        <Tab label={tab.label} icon={tab.icon} key={index} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </Box>
            {bodies.map((Body, index) => (
                <TabPanel value={value} key={index} index={index}>
                    <Body {...getChildProps(index)}/>
                </TabPanel>
            ))}
        </Box>
    )
}
export default TabLayout;