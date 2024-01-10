const settings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 200,
        centerMode: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        speed: 200,
        slidesToScroll: 2,
        centerMode: false,
      },
    },
  ],
};

export default settings;
