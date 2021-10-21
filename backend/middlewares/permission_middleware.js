exports.checkPermission = (req, res, next) => {
  const data = req.payload;
  console.log(data);
  if (data.role !== 'admin') {
    return res.status(404).json({ message: "You are not allowed to Perform this Action" });
  }
  next()
};
