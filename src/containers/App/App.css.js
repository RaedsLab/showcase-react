const styles = theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: "auto",
    minHeight: "calc(100vh - 430px)",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
  },
  footer: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(3),
    height: theme.spacing(4),
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
});

export default styles;
