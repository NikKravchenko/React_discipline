export type Status = "loading" | "success" | "error";

export function logStatus(status: Status): void {
  console.log(status);
}

logStatus("loading");
logStatus("success");
logStatus("error");
