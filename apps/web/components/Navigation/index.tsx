import {
    AppBar,
    Box,
    Divider,
    Image,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from 'design-system'

const Navigation = () => (
    <Box sx={{ display: 'flex' }}>
        <AppBar>
            <Image src='/logo.png' alt="logo" width="250" height="100" />
            <Divider />
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="About" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Gallery" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
        </AppBar>
    </Box>
);

export default Navigation