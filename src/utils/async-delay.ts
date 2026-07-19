import { logColor } from './log-color';

export async function asyncDelay(
  delayInMs: number = 0,
  verbose: boolean = false,
): Promise<void> {
  if (delayInMs <= 0) return;

  if (verbose) {
    logColor(`Delaying for ${delayInMs / 1000} s`);
  }

  await new Promise(resolve => setTimeout(resolve, delayInMs));
}
