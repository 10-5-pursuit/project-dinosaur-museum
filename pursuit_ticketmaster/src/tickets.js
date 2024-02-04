const tickets = {
    general: {
      description: "General Admission",
      price: {
        child: 20,
        adult: 30,
        senior: 25,
      },
    },
    membership: {
      description: "Membership Admission",
      price: {
        child: 15,
        adult: 28,
        senior: 23,
      },
    },
    extras: {
      movie: {
        description: "Movie Access",
        price: {
          child: 10,
          adult: 10,
          senior: 10,
        },
      },
      education: {
        description: "Education Access",
        price: {
          child: 10,
          adult: 12,
          senior: 12,
        },
      },
      terrace: {
        description: "Terrace Access",
        price: {
          child: 5,
          adult: 10,
          senior: 10,
        },
      },
    },
  };
  
 export default tickets;
  