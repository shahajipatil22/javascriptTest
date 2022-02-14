export default () => {
  if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('SW registered: ', registration);
      }).catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
};


try {
  eval(code);
} catch (e) {
  alert(e);
}

function randomString() {
    var gencode = document.getElementById('gencode'),
        length = document.getElementById('length').value,
        chars = document.getElementById('chars').value,
        mask = '',
        result = '';

    console.log(length, chars);

    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';

    for (var i = length; i > 0; --i) {
        result += mask[Math.round(Math.random() * (mask.length - 1))];
    }

    console.log(result);

    gencode.value = result;
}

window.addEventListener('load', function load(){
    document.getElementById('generate').addEventListener('click', randomString);
});
