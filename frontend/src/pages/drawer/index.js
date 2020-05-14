import React from 'react'
import { Classes } from './styles'
import { routesDrawer } from '../../routes'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  CssBaseline,
  Toolbar,
  Drawer,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'

import AppBar from '../../components/header/appBar'

export default function DrawerComponent () {
  const classes = Classes()

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar />

        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{ paper: classes.drawerPaper }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <MenuList>
              {routesDrawer.map((prop, key) => (
                <Link to={prop.path} style={{ textDecoration: 'none', color: '#333' }} key={key}>
                  <MenuItem>
                    <ListItemIcon><prop.icon/></ListItemIcon>
                    <ListItemText primary={prop.sidebarName}/>
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
            <Divider />
          </div>
        </Drawer>

        <main classes={classes.content}>
          <Toolbar />
          <Switch>
            {routesDrawer.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  )
}
