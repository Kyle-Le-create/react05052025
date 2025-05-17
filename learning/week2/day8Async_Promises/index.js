// writes an example of a closure that generates a random number between 0 and 100 with initiated and logs the password is "##" when invoked

// Modify the closure above to memoize an objective of name <-> passcode pairs, and log a passcode for a given name from cache. For instance, every time 'logPasscode('peter')' is run, the function should log "The passcode is ##" with the specific passcode generated for 'Peter';

function createPasscodeLogger() {
  const passcodes = {}; // name -> { code, timestamp }

  return function logPasscode(name) {
    const now = Date.now();
    const key = name.toLowerCase();
    if (passcodes[key]) {
      const age = now - passcodes[key].timestamp;

      if (age > 5000) {
        console.log(`Passcode for ${name} has expired.`);
        // Generate a new one
        passcodes[key] = {
          code: Math.floor(Math.random() * 101),
          timestamp: now,
        };
        console.log(`Generated a new passcode for ${name}.`);
      }
    } else {
      passcodes[key] = {
        code: Math.floor(Math.random() * 101),
        timestamp: now,
      };
      console.log(`Generated a new passcode for ${name}.`);
    }

    console.log(`The passcode for ${name} is "${passcodes[key].code}"`);
  };
}

const logPasscode = createPasscodeLogger();

// Test calls
logPasscode("peter"); // Generates and logs
setTimeout(() => logPasscode("peter"), 3000); // Still valid
setTimeout(() => logPasscode("peter"), 6000); // Expired, logs new one
