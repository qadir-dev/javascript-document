const rand = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random();
    if (random < 0.5) {
      resolve();
    } else {
      reject();
    }
  }, 3000);
});

rand
  .then(() => {
    console.log("miu");
  })
  .catch(() => {
    console.log("fuck");
  });

