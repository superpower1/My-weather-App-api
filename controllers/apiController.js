const showPlaces = (req, res) => {
  const places = [
    {
    name: 'ga'
    },
    {
      name: 'home'
    }
  ];
  res.json(places);
}

module.exports = {
  showPlaces
};
