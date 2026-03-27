export const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: 'הנתיב המבוקש לא נמצא.',
  });
};

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'אירעה שגיאה בשרת. נסו שוב מאוחר יותר.',
  });
};
