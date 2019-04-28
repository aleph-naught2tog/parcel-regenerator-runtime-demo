async function doSomethingAsynchronousTs() {
  const sampleResponse = await fetch('https://httpbin.org/get');
  const text = await sampleResponse.text();

  return text;
}

async function runTs() {
  const result = await doSomethingAsynchronousTs();
  document.body.innerHTML += `<hr />typescript:<br/> <pre>${result}</pre>`;
}

document.addEventListener('DOMContentLoaded', runTs);
