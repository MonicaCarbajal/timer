function setAlarm(time) {
  const delay = time * 1000;

  setTimeout(() => {
    console.log('\x07');

    console.log(`A sound plays after ${time} seconds`);
  }, delay);
}

function parseArguments() {
  const args = process.argv.slice(2);

  const validTimes = args.filter(arg => !isNaN(Number(arg)) && Number(arg) > 0);

  if (validTimes.length === 0) {
    console.log('Sorry! But it looks like that the imput is invalid. Try again with a (positive) number!');
  } else {
    for (const time of validTimes) {
      setAlarm(Number(time));
    }
  }
}

parseArguments();