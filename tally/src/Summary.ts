import { MatchData } from "./MatchData";

interface Analyzer {
  run(matches: MatchData[]): string;
}

interface Printer {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public printer: Printer) {}

  buildAndPrintReport(data: MatchData[]): void {
    const analysis = this.analyzer.run(data);
    this.printer.print(analysis);
  }
}
