async function doSomethingAsynchronous() {
  const sampleResponse = await fetch('https://httpbin.org/get');
  const text = await sampleResponse.text();

  return text;
}

async function run() {
  const result = await doSomethingAsynchronous();
  document.body.innerHTML = `<pre>${result}</pre>`;
}

document.addEventListener('DOMContentLoaded', run);
