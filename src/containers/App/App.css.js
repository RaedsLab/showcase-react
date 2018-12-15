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
  footer: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 25,
    height: 50,
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
});

export default styles;
