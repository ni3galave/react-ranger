import React from "react";
import classNames from "classnames";

//@material-ui
import { withStyles, List, ListItem, ListItemIcon, ListItemText, Divider, Drawer } from "@material-ui/core";
import { MoveToInbox as InboxIcon, Mail as MailIcon, Dashboard, Group} from "@material-ui/icons";
import { Link } from "react-router-dom";


import styles from "./styles";

const SideBar = ({ handleDrawerClose, open, theme, classes, routes }) => {
	return (
		<Drawer
			variant="permanent"
			className={classNames(classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open
			})}
			classes={{
				paper: classNames({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})
			}}
			open={open}
		>
			<div
				className={classNames(classes.toolbar, {
					[classes.toolbarOpen]: open,
					[classes.toolbarClose]: !open
				})}
			>
				<h4>Ranger</h4>
			</div>
			<Divider />
			<List>
				{["Access Manager"].map((text, index) => (
					<ListItem button key={text} to="/dashboard" component={Link}>
						<ListItemIcon>
							<Dashboard />
						</ListItemIcon>
						{open ? <ListItemText primary={text} /> : null}
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["Audit"].map((text, index) => (
					<ListItem button key={text} to="/audit" component={Link}>
						<ListItemIcon>
							<MailIcon />
						</ListItemIcon>
						{open ? <ListItemText primary={text} /> : null}
					</ListItem>
				))}
			</List>
			<List>
				{["Users"].map((text, index) => (
					<ListItem button key={text} to="/user" component={Link}>
						<ListItemIcon>
							<Group />
						</ListItemIcon>
						{open ? <ListItemText primary={text} /> : null}
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};
// export default (SideBar);
export default withStyles(styles)(SideBar);
