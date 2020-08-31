"use strict";

const { default: JestWorker } = require("jest-worker");

async function main() {
  const worker = new JestWorker(require.resolve("./Worker"), {
    enableWorkerThreads: true,
  });
  worker.getStdout().pipe(process.stdout);
  worker.getStderr().pipe(process.stderr);
  const result = await worker.hello("Alice");
  await worker.end();
}

main();
