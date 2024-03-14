export function wrapPromise(promise) {
    let status = 'pending';
    let result;
    let suspender = promise.then(
      response => {
        status = 'success';
        result = response;
      },
      error => {
        status = 'error';
        result = error;
      }
    );
  
    return {
      read() {
        if (status === 'pending') {
          throw suspender;
        } else if (status === 'error') {
          throw result;
        } else if (status === 'success') {
          return result;
        }
      }
    };
  }
  