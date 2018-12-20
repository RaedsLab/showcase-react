const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 'auto',
    minHeight: 'calc(100vh - 430px)',
    marginLeft: 25,
    marginRight: 25
  },
  paper: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    flexShrink: 1,
    flexGrow: 1
  }
});

export default styles;
