import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function BottomBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button variant="contained" color="primary" onClick={() => { props.update() }}>
            GENERATE CHART
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBar);