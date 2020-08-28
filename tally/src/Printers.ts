import fs from "fs";

export class ConsoleReport {
  print(report: string): void {
    console.log(report);
  }
}

export class HTMLReport {
  print(report: string): void {
    const html = `
    <div>
      <h1> Analysis Output</h1>
      <div>${report}</div>
    </div>`;

    fs.writeFileSync("report.html", html);
  }
}
